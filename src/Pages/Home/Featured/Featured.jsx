import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'; // Ensure to import your CSS file

const Featured = () => {
    return (
        <div className="featured-background bg-fixed pt-8 my-20 text-white">
            <SectionTitle subHeading='Check it Out' heading='from our Menu'></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16 bg-slate-600 bg-opacity-45">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline text-black">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;