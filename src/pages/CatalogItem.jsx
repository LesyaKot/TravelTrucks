import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../redux/campers/selectors.js";
import { fetchCamperById } from "../redux/campers/operations.js";
import { closeModal, openModal } from "../redux/modal/slice.js";
import { selectModal } from "../redux/modal/selectors.js";
import { Toaster } from "react-hot-toast";
import CamperItem from "../components/CamperItem/CamperItem.jsx";
import BookForm from "../components/BookForm/BookForm.jsx";
import CatalogItemNav from "../components/CatalogItemNav/CatalogItemNav.jsx";
import ImageModal from "../components/ImageModal/ImageModal.jsx";

export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { currentItem } = useSelector(selectCampers);
  const { id } = useParams();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isOpen = useSelector(selectModal);

  const [currentImageUrl, setCurrentImageUrl] = useState("");

  useEffect(() => {
   
    dispatch(fetchCamperById(id));
    console.log('Fetching camper details for ID:', id);
  }, [dispatch, id]);

  const handleOpenModal = (imageUrl) => {
    console.log('Opening modal for image:', imageUrl); 
    setCurrentImageUrl(imageUrl);
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    dispatch(closeModal());
  };

  return (
    <section>
      {isLoading && `Please wait a second`}
      {error && `Something is wrong`}
      {currentItem && (
        <div>
          <ImageModal
            isOpen={isOpen}
            onClose={handleCloseModal}
            imageUrl={currentImageUrl}
          />
          <CamperItem camper={currentItem} onClick={handleOpenModal} />
          <CatalogItemNav />
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
             
            <BookForm />
          </div>
        </div>
      )}
      <Toaster position="top-left" containerStyle={{ zIndex: 99999 }} />
    </section>
  );
}
