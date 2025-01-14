

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 my-8 text-center">
            <p className="text-yellow-600 mb-3 ">----{subHeading}----</p>
            <h3 className="text-4xl border-y-4 py-4 uppercase" >{heading}</h3>
        </div>
    );
};

export default SectionTitle;