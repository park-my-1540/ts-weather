/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Position } from "@/components/Position";
import { Text } from "@/components/Text";
import { IconText } from '@/components/IconText';
import { motion, useAnimation } from "framer-motion";
import { mainState } from "@/recoil/atoms/mainAtom";
import { useRecoilValue, useRecoilState } from 'recoil';
import { useEffect, useCallback } from "react";
import { optionState } from '@/recoil/atoms/optionAtom';
import { setWeatherIcon } from "@/util/filter";
import { WidgetProps } from "@/types/weather";

export default function Widget({ items, weatherRef } : WidgetProps) {
    const isOpen = useRecoilValue(mainState); // 현재 테마 값 가져오기
    const widgetControl = useAnimation();
    const [tempOptions, setTempOptions] = useRecoilState(optionState);
    const animationSettings = { type: 'spring', damping: 20 };
    const moveToCenter = useCallback(() => {
        widgetControl.start({ scale : 1, x:0, y:0, transition: animationSettings });
    },[widgetControl]);

    const [weatherItem] = items;

    const moveToSub = useCallback(() => {
        // weatherRef.current가 null인지 확인
        if (weatherRef.current) {
            const gap = weatherRef.current.clientHeight / 100; 
            const scaleValue = Math.max(0, 1 - gap / 10); // scale을 gap을 기준으로 반비례적으로 설정 gap이 커질수록 scale은 작아짐
    
            widgetControl.start({ 
                scale: scaleValue, 
                x: (-gap * 15), 
                y: (-gap * 50), 
                transition: animationSettings 
            });
        } else {
            console.warn("weatherRef.current is null"); // null일 경우 경고 메시지 출력
        }
    }, [widgetControl]);

    useEffect(()=>{
        isOpen ? moveToSub(): moveToCenter();
    },[isOpen])
  
    return (
    <Position position="absolute" top="40%" right="30%">
        {
            weatherItem && (
                <motion.div animate={widgetControl}>
                    <Text sizes="large" color="accent" textAlign="center">{weatherItem.main}
                        <IconText icon={setWeatherIcon(weatherItem.main)} fontSize="80px" color='accent' style={{'marginLeft':8}}/>
                    </Text>
                    <Text sizes="big" color="accent" vertical="textTop" display="inlineBlock" weights="bold">{weatherItem.temp}</Text>
                    <Text sizes="largeX2" 
                            weights="bold" 
                            vertical="textTop" 
                            display="inlineBlock" 
                            color="accent">{tempOptions.unit ? "ºC" : "°F"}</Text>
                </motion.div>
            )
        }
    </Position>
)
}