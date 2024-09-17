import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {fetchCampers} from '.././redux/campers/operations.js';
import { selectCampers, selectIsLoading } from ".././redux/campers/selectors.js";
import CamperList from '../components/CampersList/CampersList.jsx';
import FilterForm from '../components/FilterForm/FilterForm.jsx';

export default function Catalog(){
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const campers = useSelector(selectCampers);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    return(
        <section>
              <div>{isLoading && "Request in progress..."}</div>
       <div>
       <FilterForm />
        <CamperList campers={campers.items}/>
       </div>
       <Toaster position="top-left" containerStyle={{ zIndex: 9999 }} />
        </section>
    )
}