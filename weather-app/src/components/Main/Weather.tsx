import { IconButton, IconText } from '@/components/IconText';
import { faArrowDown, faTint, faWeight, faSmog, faSun, faCloud, faClock, faThermometerQuarter, faCompass, faWind } from '@fortawesome/free-solid-svg-icons'
import { Text } from "@/components/Text";
import  Flex  from "@/components/Flex";
import { Position } from "@/components/Position";
import { width100, weatherCont, weatherIcon, conditionalBorder } from "@/styles/style.css";

export default function Main() {
    const toggleOpen = () => {

    }
    return (
    <>
        <Position position="absolute" bottom="0" className={width100}>
            <IconButton icon={faArrowDown} color='accent' fonstSize="24px" onClick={toggleOpen} />
            <div className={weatherCont}>
                <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                    <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>Atmospheric Conditions</Text>
                    <Flex direction="row" align="center" justify="between" gap="small">
                        <div className={weatherIcon}>
                            <IconText icon={faTint} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Humidity<br/> 63%</Text>
                        </div>
                        <div className={weatherIcon}>
                            <IconText icon={faWeight} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Pressure  1015</Text>
                        </div>
                        <div className={weatherIcon}>
                            <IconText icon={faSmog} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Visibility <br/> 63%</Text>
                        </div>
                    </Flex>
                </Flex>
                <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                    <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>Sunrise/Sunset</Text>
                    <Flex direction="row" align="center" justify="between" gap="small">
                        <div className={weatherIcon}>
                            <IconText icon={faSun} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Sunrise <br/> 63%</Text>
                        </div>
                        <div className={weatherIcon}>
                            <IconText icon={faCloud} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Humidity<br/> 63%</Text>
                        </div>
                        <div className={weatherIcon}>
                            <IconText icon={faClock} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Humidity<br/> 63%</Text>
                        </div>
                    </Flex>
                </Flex>
                <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                    <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>Wind Conditions</Text>
                    <Flex direction="row" align="center" justify="between" gap="small">
                        <div className={weatherIcon}>
                            <IconText icon={faThermometerQuarter} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Sunrise <br/> 63%</Text>
                        </div>
                        <div className={weatherIcon}>
                            <IconText icon={faCompass} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Humidity<br/> 63%</Text>
                        </div>
                        <div className={weatherIcon}>
                            <IconText icon={faWind} color='accent' fontSize='26px'/>
                            <Text sizes="medium" color="accent">Humidity<br/> 63%</Text>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </Position>
    </>
    );
  }
