import AboutMe from "./homeSections/AboutMe";
import Banner from "./homeSections/Banner";
import ContactMe from "./homeSections/ContactMe";
import Projects from "./homeSections/Projects";
import SkillsEducation from "./homeSections/SkillsAndEducation";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <SkillsEducation/>
            <Projects/>
            <ContactMe/>
        </div>
    );
};

export default Home;