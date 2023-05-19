import {ref, computed} from 'vue'
import { useRoute, useRouter} from 'vue-router'
import { initializeApp} from "@firebase/app";
import { getStorage, ref as refs, uploadBytesResumable, getDownloadURL} from "@firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDj96EiZYg0FPxH5FmiXIRhRfG9B5fdJ5U",
  authDomain: "mission-phoenix.firebaseapp.com",
  projectId: "mission-phoenix",
  storageBucket: "mission-phoenix.appspot.com",
  messagingSenderId: "1048671898210",
  appId: "1:1048671898210:web:e72440ee1aa5cbe3361f3b",
  measurementID: "G-CR297872NV"
};



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);

const getGear = () => {
  const route = useRoute();
  const router = useRouter();

  const listeningServer = 'https://mission-phoenix.onrender.com'

  const itemId = computed(() => route.params.id);

  const state = ref({
    newItemName: '',
    newSizes: [],
    newColors: [],
    newPrices: {
      min: 0,
      max: 0
    },
    newImageURLS: [],
    newInStock: true,
    newCategory: '',     
    gear: [],
    currentItem: {}
  });


  // This application uses Firebase storage for the images. When a new item is submitted, the first thing that happens
  //is the uploading of the images. Then, the URL(s) is grabbed and passed into the newItem function along with all of
  //the other new item properties. This object is then passed to mongoDB for storage.
  const uploadImage = async (images, category) => {

    const imageUrlsExport = [];

    try {
      let counter = 1;
      images.forEach((e) => {
        // Create the file metadata
        const metadata = {
          contentType: "image/jpeg"
        };
        
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = refs(storage, `images/${category}/` + e[0].name);
        const uploadTask = uploadBytesResumable(storageRef, e[0], metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Progress: ${progress}%`);
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                // console.log('Upload is running');
                break;
            }
          }, (error) => {
            console.error(error)
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              state.value.newImageURLS.push(downloadURL);

              if(counter === images.length) {
                // If all images have been uploaded to firebase and URLs have been passed to images array,
                //upload new item object to mongoDB
                newItem(state.value.newCategory);

                // Ensures enough time to actually add the item to the DB before reload destroys form
                // setTimeout(() => {
                //   location.reload()
                // }, 1000)
              }
              counter++
            });
          }
        );
      })
    } catch (error) {
      throw(error)
    }
  }

  const GetAllGear = async () => {
    try {
        await fetch(`${listeningServer}/gear`)
        .then((res) => res.json())
        .then((data) => {
          state.value.gear = data
        })
    } catch(err) {
        console.error(err)
        // alert(err)
    }
  }

  const GetGearByCategory = async (categ) => {
    try {
        await fetch(`${listeningServer}/gear`)
        .then((res) => res.json())
        .then((data) => {
          const mensGear = data.filter((e) => e.category === categ);
          state.value.gear =  mensGear;
        })
    } catch(err) {
        console.error(err)
        // alert(err)
      }
  }

  // const newItem = (categ) => { 
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": state.token
  //     },
  //     body: JSON.stringify({
  //       itemName: state.value.newItemName,
  //       sizes: state.value.newSizes,
  //       colors: state.value.newColors,
  //       prices: state.value.newPrices,
  //       imageURLS: state.value.newImageURLS,
  //       inStock: state.value.newInStock,
  //       category: state.value.newCategory
  //     }) 
  //   }
  //     fetch(`${listeningServer}/gear/new`, 
  //     requestOptions
  //   ).then(GetAllGear())
  // }

  const newItem = async (categ) => { 
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "auth-token": state.token
      },
      body: JSON.stringify({
        itemName: state.value.newItemName,
        sizes: state.value.newSizes,
        colors: state.value.newColors,
        prices: state.value.newPrices,
        imageURLS: state.value.newImageURLS,
        inStock: state.value.newInStock,
        category: state.value.newCategory
      }) 
    }
      await fetch(`${listeningServer}/gear/new`, 
      requestOptions
    ).then((res) => {
      if(res.ok){
        GetAllGear();
        location.reload();
      }
    }
      
    )
  }

  const deleteItem = (_id, categ) => {
      fetch(
        `${listeningServer}/gear/${_id}`, 
        { method: "DELETE"}
      )
      .then(GetAllGear())
  }

  const editItem = () => { 
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //Add all elements from state
        itemName: state.value.newItemName,
        sizes: state.value.newSizes,
        colors: state.value.newColors,
        prices: state.value.newPrices,
        imageURLS: state.value.newImageURLS,
        inStock: state.value.newInStock,
        category: state.value.newCategory
      }) 
    }
      
    fetch(`${listeningServer}/gear/update/${itemId.value}`, 
      requestOptions
    ).then(res =>  res.body
      ).then(res => {
        console.log(res)
      }) 
    router.push('/gear')
  }

  const item = ref({});

    const GetGearById = async (_id) => {
      try {
        await fetch(`${listeningServer}/gear`)
        .then((res) => res.json())
        .then((data) => {
          const thisItem = data.filter((e) => e._id === _id)
          state.value.currentItem = thisItem[0]
          
        })
    } catch(err) {
        console.error(err)
        // alert(err)
      }
    }


  return {
    state,
    GetAllGear,
    newItem,
    deleteItem,
    editItem,
    GetGearById,
    GetGearByCategory,
    item, 
    itemId,
    uploadImage,
  }
}

export default getGear