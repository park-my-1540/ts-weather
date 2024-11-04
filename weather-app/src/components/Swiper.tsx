import React, { useState, useEffect, useCallback } from "react";
import * as style from "@/styles/components/swiper.css";
import { motion, useAnimation } from "framer-motion";
import { IconButton } from '@/components/IconText';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import  Flex  from "@/components/Flex";
import { Position } from "@/components/Position";

interface SwiperProps {
    children : React.ReactNode
}

export default function Swiper({children} : SwiperProps) {

    const limit = React.Children.toArray(children).length/3;
    const slidePrevNext = useAnimation();
    const animationSettings = { type: 'spring', damping: 20 };
    const [currentIdx, setCurrentIdx] = useState(1); // currentIdx를 상태로 관리
    const [current, setCurrent] = useState(0);
    const [isPrevDisable, setIsPrevDisable] = useState(false);
    const [isNextDisable, setIsNextDisable] = useState(false);
    const gap = 298;
  
    const moveToPrev = useCallback(() => {
      if (isPrevDisable) {
        return;
      }
      setCurrent(prev => prev + gap); // 상태 업데이트로 current를 변경
      setCurrentIdx(prev => prev - 1); // 상태 업데이트로 currentIdx를 변경
      slidePrevNext.start({ x: current + gap, transition: animationSettings });
    },[slidePrevNext, currentIdx, current]);
  
    const moveToNext = useCallback(() => {
      if (isNextDisable) {
        return;
      }
      setCurrent(prev => prev - gap); // 상태 업데이트로 current를 변경
      setCurrentIdx(prev => prev + 1); // 상태 업데이트로 currentIdx를 변경
      slidePrevNext.start({ x: current - gap, transition: animationSettings });
    },[slidePrevNext, currentIdx, current]);
  
    useEffect(() => {
      if (currentIdx <= 1) {
        setIsPrevDisable(true);
      } else {
        setIsPrevDisable(false);
      }
  
      if (currentIdx > limit-1) {
        setIsNextDisable(true);
      } else {
        setIsNextDisable(false);
      }
    }, [currentIdx]);

    return (
        <Flex direction="row" align="center" justify="between" gap="small">
            <Position position="absolute" left={15}>
                <IconButton icon={faChevronLeft} color='accent' fonstSize="26px" disable={isPrevDisable} onClick={moveToPrev}/>
            </Position>
            <Position position="absolute" right={15}>
                <IconButton icon={faChevronRight} color='accent' fonstSize="26px" disable={isNextDisable} onClick={moveToNext}/>
            </Position>
            <div className={style.container}>
                <motion.div animate={slidePrevNext}>
                    <Flex direction="row" align="center" justify="between" gap="small">
                        { children }
                    </Flex>
                </motion.div>
            </div>
       </Flex>

    )
}