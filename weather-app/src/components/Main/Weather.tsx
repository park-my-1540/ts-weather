/* eslint-disable @typescript-eslint/no-unused-expressions */
import { IconButton, IconText } from '@/components/atom/IconText';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback, useState } from 'react';
import { mainState } from "@/recoil/atoms/mainAtom";
import { useRecoilState } from 'recoil';
import { faChevronDown, faTint, faWeight, faSmog, faSun, faCloud, faClock, faThermometerQuarter, faCompass, faWind } from '@fortawesome/free-solid-svg-icons'
import { Text } from "@/components/atom/Text";
import  Flex  from "@/components/atom/Flex";
import  Swiper  from "@/components/atom/Swiper";
import WeatherSection from '@/components/main/WeatherSection';
import { Position } from "@/components/atom/Position";
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
                                <WeatherSection
                                    title="Atmospheric Conditions"
                                    items={[
                                    { icon: faTint, label: 'Humidity', value: `${weatherItem.humidity}%` },
                                    { icon: faWeight, label: 'Pressure', value: weatherItem.pressure },
                                    { icon: faSmog, label: 'Visibility', value: weatherItem.visibility },
                                    ]}
                                />
                            )
                        }
                        {
                            tempOptions.sun && (
                                <WeatherSection
                                    title="Sunrise/Sunset"
                                    items={[
                                    { icon: faSun, label: 'Sunrise', value: weatherItem.sunrise },
                                    { icon: faCloud, label: 'Cloud', value: weatherItem.cloud },
                                    { icon: faClock, label: 'Sunset', value: weatherItem.sunset },
                                    ]}
                                />
                            )
                        }
                        {
                            tempOptions.wind && (
                                <WeatherSection
                                    title="Wind Conditions"
                                    items={[
                                    { icon: faThermometerQuarter, label: 'Feels Like', value: weatherItem.temp },
                                    { icon: faCompass, label: 'Direction', value: weatherItem.wind_dir },
                                    { icon: faWind, label: 'Speed', value: weatherItem.wind_speed },
                                    ]}
                                />
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
