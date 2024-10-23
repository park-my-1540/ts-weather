/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Position } from "@/components/Position";
import { Text } from "@/components/Text";
import { IconText } from '@/components/IconText';
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from "framer-motion";
import { mainState } from "@/recoil/atoms/mainAtom";
import { useRecoilValue } from 'recoil';
import { useEffect, useCallback } from "react";

export default function Widget() {
    const isOpen = useRecoilValue(mainState); // 현재 테마 값 가져오기
    const widgetControl = useAnimation();

    const animationSettings = { type: 'spring', damping: 20 };

    const moveToCenter = useCallback(() => {
        widgetControl.start({ scale : 1, x:0, y:0, transition: animationSettings });
    },[widgetControl]);
    
    const moveToSub = useCallback(() => {
        widgetControl.start({ scale : 0.9, x:-80, y:-200, transition: animationSettings});
    },[widgetControl]);

    useEffect(()=>{
        isOpen ? moveToSub(): moveToCenter();
    },[isOpen])
  
    return (
    <Position position="absolute" top="40%" right="30%">
        <motion.div animate={widgetControl}>
            <Text sizes="large" color="accent" textAlign="center">Rain
                <IconText icon={faSun} fontSize="50px" color='accent' style={{'marginLeft':8}}/>
            </Text>
            <Text sizes="big" color="accent" weights="bold">15
                <Text sizes="largeX2" 
                        weights="bold" 
                        vertical="textTop" 
                        display="inlineBlock" 
                        color="accent">ºC</Text>
            </Text>
        </motion.div>
    </Position>
)
}