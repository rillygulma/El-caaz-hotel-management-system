"use client";

import { FC, useEffect, useState } from 'react';

type Props = {
    endValue: number;
    duration: number;
};

const CountUpNumber: FC<Props> = ({ endValue, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | undefined;
        let animationFrameId: number;

        const updateCount = (timeStamp: number) => {
            if (startTime === undefined) startTime = timeStamp;
            const progress = timeStamp - startTime;

            if (progress < duration) {
                setCount(Math.min(endValue, (progress / duration) * endValue));
                animationFrameId = requestAnimationFrame(updateCount);
            } else {
                setCount(endValue);
            }
        };

        animationFrameId = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrameId);
    }, [endValue, duration]);

    return (
        <p className="md:font-bold font-medium text-lg xl:text-5xl">
            {Math.round(count)}
        </p>
    );
};

export default CountUpNumber;
