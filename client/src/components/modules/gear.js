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
      gear: {},
    });


    const uploadImage = (images) => {
      const imageUrlsExport = [];

      for (let i = 0; i < images.length; i++) {
        // Create the file metadata
        const metadata = {
          contentType: "image/jpeg"
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = refs(storage, 'images/' + images[i][0].name);
        const uploadTask = uploadBytesResumable(storageRef, images[i][0], metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, 
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              imageUrlsExport.push(downloadURL)
            });
          }
        );
      }
    }

    

    const GetAllGear = async () => {
        try {
            await fetch('http://localhost:3000/gear')
            .then((res) => res.json())
            .then((data) => {
              state.value.gear = data
            })
        } catch(err) {
            console.error(err)
            // alert(err)
        }
    }

    const newItem = () => { 
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // "auth-token": state.token
          },
          body: JSON.stringify({
            // itemName: newItemName,
            // sizes: newSizes,
            // colors: newColors,
            // prices: newPrices,
            // imageURLS: newImageURLS,
            // inStock: newInStock,
            // category: newCategory     
            itemName: "Test Name",
            sizes: ["xs", "s"],
            colors: ["red", "blue"],
            prices: [0, 15],
            imageURLS: state.value.newImageURLS,
            inStock: state.value.newInStock,
            category: "mens"
          }) 
        }
          fetch("http://localhost:3000/gear/new", 
          requestOptions
        ).then(GetAllGear())
    }

    const deleteItem = (_id) => {
        fetch("http://localhost:3000/gear/delete/" + _id, { method: "DELETE"})
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
            itemName: newItemName,
            sizes: newSizes,
            colors: newColors,
            prices: newPrices,
            imageURLS: newImageURLS,
            inStock: newInStock,
          }) 
        }
        fetch("http://localhost:3000/gear/update/" + itemId.value, 
        requestOptions)
          .then(res =>  res.body ) 
          .then(res => {console.log(res)}) 
          router.push('/gear')
      }

    const item = ref({});

    const GetItemById = async () => {
        try {
            fetch("http://localhost:3000/gear" + _id)
            .then(res => res.json)
            .then(data => {
               item.value = data.filter(t => t._id === itemId.value)
            })
        } catch(err) {
            // alert(err)
        }
    }


    return {
        state,
        GetAllGear,
        newItem,
        deleteItem,
        editItem,
        GetItemById,
        item, 
        itemId,
        uploadImage

    }
}

export default getGear