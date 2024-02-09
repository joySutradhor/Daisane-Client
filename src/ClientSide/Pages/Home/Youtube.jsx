import "./Youtube.css"
import SecondaryFooter from './../../Shared/SecondaryFooter';

const Youtube = () => {
    return (
        <div>
            <div className="lR leftRightW 2xl:mb-[250px] mb-[60px] xl:mb-[200px] 2xl:w-[1620px] xl:w-[1270px] w-[310px] 2xl:h-[927px] xl:h-[751px] youTubeHeightWidth mx-auto  youTubeHeight">
                <div className="relative" style={{ paddingBottom: "57.22%" }}>
                    {/* <iframe
                    className="absolute top-0 left-0 w-full h-full xl:rounded-[44px] rounded-[15px]"
                    src="https://www.youtube.com/embed/cZH70P13WIc?si=WoCHuC6csNXEbSfK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe> */}

                    <iframe
                        className="absolute top-0 left-0 w-full h-full xl:rounded-[44px] rounded-[15px]"
                        src="https://www.youtube.com/embed/47lbiCBoVyk?si=GYQV8v43_Udl_fL6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <SecondaryFooter></SecondaryFooter>
        </div>

    );
};

export default Youtube;