import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect (() =>{
        fetch('Menu.json')
        .then (res =>res.json())
        .then (data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)

        })



    },[])
    return (
        <section className="mb-12">
            <SectionTitle
             subHeading={"Check It Now"}
             heading={"From our Menu"}
            >
           

            </SectionTitle>

            <div className=" grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                         key={item._id}
                         item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;