
import Course from "../../components/course/Course";
import EduCards from "../../components/educationCards/EduCards";
import Banner from "../banner/banner";
import Sponsors from "../sponsors/Sponsors";

const Home = () => {
    return (
        <div>
            <div className="w-full ">
                <Banner></Banner>
                <EduCards></EduCards>
                <Course></Course>
                <Sponsors></Sponsors>
            </div>
        </div>
    );
};

export default Home;