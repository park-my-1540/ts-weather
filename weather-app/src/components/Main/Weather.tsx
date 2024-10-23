/* eslint-disable @typescript-eslint/no-unused-expressions */
import { IconButton, IconText } from '@/components/IconText';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback } from 'react';
import { mainState } from "@/recoil/atoms/mainAtom";
import { useRecoilState } from 'recoil';
import { faChevronDown, faTint, faWeight, faSmog, faSun, faCloud, faClock, faThermometerQuarter, faCompass, faWind } from '@fortawesome/free-solid-svg-icons'
import { Text } from "@/components/Text";
import  Flex  from "@/components/Flex";
import  Swiper  from "@/components/Swiper";
import { Position } from "@/components/Position";
import { width100, weatherCont, weatherIcon, conditionalBorder } from "@/styles/style.css";

export default function Main() {

    const slideUpDown = useAnimation();
    const rotate = useAnimation(); 
    const [isOpen, setIsOpen] = useRecoilState(mainState);

    // 공통 애니메이션 옵션 설정
    const animationSettings = { type: 'spring', damping: 20 };
   
    const moveToTop = useCallback(() => {
        rotate.start({ rotate: 180, transition: animationSettings });
        slideUpDown.start({ y: 0, transition: animationSettings });
    }, [rotate, slideUpDown]);
    
    const moveToBottom = useCallback(() => {
        rotate.start({ rotate: 0, transition: animationSettings });
        slideUpDown.start({ y: 370, transition: animationSettings });
    }, [rotate, slideUpDown]);
    
    const toggleOpen = () => setIsOpen((prev:boolean) => !prev); 

    useEffect(()=>{
        isOpen ? moveToTop():  moveToBottom();
    }, [isOpen, moveToTop, moveToBottom]);

    return (
    <>
        <Position position="absolute" bottom="0" className={width100}>
            <motion.div animate={slideUpDown}>

                <Position position="absolute" top="-35px" left="45%">
                    <motion.div animate={rotate}>
                        <IconButton icon={faChevronDown} color='accent' fonstSize="26px" onClick={toggleOpen} />
                    </motion.div>
                </Position>

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

                    <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                        <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>8 Days Forecast</Text>
                    </Flex>

                    <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                        <Swiper>
                            <div className={weatherIcon} key={1}>
                                <IconText icon={faThermometerQuarter} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">1Sunrise <br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faCompass} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">2Humidity<br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faWind} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">3Humidity<br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faThermometerQuarter} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">4Sunrise <br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faCompass} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">5Humidity<br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faWind} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">6Humidity<br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faThermometerQuarter} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">7Sunrise <br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faCompass} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">8Humidity<br/> 63%</Text>
                            </div>
                            <div className={weatherIcon}>
                                <IconText icon={faWind} color='accent' fontSize='26px'/>
                                <Text sizes="medium" color="accent">9Humidity<br/> 63%</Text>
                            </div>
                        </Swiper>

                    </Flex>


                </div>

            </motion.div>
        </Position>
    </>
    );
  }
