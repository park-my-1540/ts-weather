/* eslint-disable @typescript-eslint/no-unused-expressions */
import { IconButton, IconText } from '@/components/IconText';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback, useState } from 'react';
import { mainState } from "@/recoil/atoms/mainAtom";
import { useRecoilState } from 'recoil';
import { faChevronDown, faTint, faWeight, faSmog, faSun, faCloud, faClock, faThermometerQuarter, faCompass, faWind } from '@fortawesome/free-solid-svg-icons'
import { Text } from "@/components/Text";
import  Flex  from "@/components/Flex";
import  Swiper  from "@/components/Swiper";
import { Position } from "@/components/Position";
import { weatherCont, weatherIcon, conditionalBorder } from "@/styles/style.css";
import { optionState } from '@/recoil/atoms/optionAtom';
import { convertTo12HourFormat, setWeatherIcon } from "@/util/filter";
import { WidgetProps } from "@/types/weather";

export default function Main({ items, weatherRef } : WidgetProps) {
    const [weatherItem] = items;
    const slideUpDown = useAnimation();
    const rotate = useAnimation(); 
    const [isOpen, setIsOpen] = useRecoilState(mainState);
    const [tempOptions, ] = useRecoilState(optionState);
    const [refHeight, setRefHeight] = useState(0);

    // 공통 애니메이션 옵션 설정
    const animationSettings = { type: 'spring', damping: 20 };
    
    const moveToTop = useCallback(() => {
        rotate.start({ rotate: 180, transition: animationSettings });
        slideUpDown.start({ y: 660 - refHeight, transition: animationSettings });
    }, [rotate, slideUpDown,refHeight]);
    
    const moveToBottom = useCallback(() => {
        rotate.start({ rotate: 0, transition: animationSettings });
        slideUpDown.start({ y: 660, transition: animationSettings });
    }, [rotate, slideUpDown,refHeight]);
    
    const toggleOpen = () => setIsOpen((prev:boolean) => !prev); 

    useEffect(()=>{
        isOpen ? moveToTop():  moveToBottom();
    }, [isOpen, moveToTop, moveToBottom]);

    useEffect(() => {
        if (weatherRef.current) {
            setRefHeight(weatherRef.current.clientHeight);
        }
    }, [weatherRef.current]); // isOpen이 변경될 때마다 높이를 업데이트

    
    return (
    <>
    <div ref={weatherRef}>
        <motion.div animate={slideUpDown}>

            <Position position="absolute" top="-35px" left="45%">
                <motion.div animate={rotate}>
                    <IconButton icon={faChevronDown} color='accent' fonstSize="26px" onClick={toggleOpen} />
                </motion.div>
            </Position>

            {
                weatherItem && (

                    <div className={weatherCont} ref={weatherRef}>
                        {
                            tempOptions.atmo && (
                                <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                                    <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>Atmospheric Conditions</Text>
                                    <Flex direction="row" align="center" justify="between" gap="small">
                                        <div className={weatherIcon}>
                                            <IconText icon={faTint} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Humidity<br/>{weatherItem.humidity}%</Text>
                                        </div>
                                        <div className={weatherIcon}>
                                            <IconText icon={faWeight} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Pressure<br/>{weatherItem.pressure}</Text>
                                        </div>
                                        <div className={weatherIcon}>
                                            <IconText icon={faSmog} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Visibility <br/>{weatherItem.visibility}</Text>
                                        </div>
                                    </Flex>
                                </Flex>
                            )
                        }
                        {
                            tempOptions.sun && (
                                <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                                    <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>Sunrise/Sunset</Text>
                                    <Flex direction="row" align="center" justify="between" gap="small">
                                        <div className={weatherIcon}>
                                            <IconText icon={faSun} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Sunrise <br/>{weatherItem.sunrise}</Text>
                                        </div>
                                        <div className={weatherIcon}>
                                            <IconText icon={faCloud} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Cloud<br/>{weatherItem.cloud}</Text>
                                        </div>
                                        <div className={weatherIcon}>
                                            <IconText icon={faClock} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Sunset<br/>{weatherItem.sunset}</Text>
                                        </div>
                                    </Flex>
                                </Flex>
                            )
                        }
                        {
                            tempOptions.wind && (
                                <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                                    <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>Wind Conditions</Text>
                                    <Flex direction="row" align="center" justify="between" gap="small">
                                        <div className={weatherIcon}>
                                            <IconText icon={faThermometerQuarter} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Feels Like <br/>{weatherItem.temp}</Text>
                                        </div>
                                        <div className={weatherIcon}>
                                            <IconText icon={faCompass} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Direction<br/>{weatherItem.wind_dir}</Text>
                                        </div>
                                        <div className={weatherIcon}>
                                            <IconText icon={faWind} color='accent' fontSize='26px'/>
                                            <Text sizes="medium" color="accent">Speed<br/>{weatherItem.wind_speed}</Text>
                                        </div>
                                    </Flex>
                                </Flex>
                            )
                        }


                        {/* forecast */}
                        <Flex direction="column" align="center" justify="between" gap="small" className={conditionalBorder}>
                            <Text sizes="medium" color="accent" textAlign='center' style={{'padding' : '8px 0'}}>data at 3-hour intervals</Text>
                        </Flex>

                        <Flex direction="column" align="center" justify="between" gap="small">
                            <Swiper>
                                {
                                    weatherItem.forecastArray.list.map((item, index) => (
                                        <div className={weatherIcon} key={index}>
                                            <IconText icon={setWeatherIcon(item.weather[0].main)} color='accent' fontSize='26px'/>
                                            <Text sizes="smallmedium" color="accent" style={{'padding' : '8px 0'}}>{convertTo12HourFormat(item.dt_txt)}<br/>{item.weather[0].main}</Text>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        </Flex>
                    </div>
                )
            }
        </motion.div>
    </div>
    </>
    );
  }
