  "use client";

import { FC } from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
};

const ClientComponent: FC<Props> = ({ heading1, section2 }) => {
    return (
        <section className="flex px-4 items-center gap-12 container mx-auto">
            <div className="py-10 h-full">
                {heading1}
                {/* Room Description */}
                <div className="flex justify-between mt-12">
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <p className="text-xs lg:text-xl text-center">Basic Room</p>
                        <CountUpNumber duration={5000} endValue={30} />
                    </div>
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <p className="text-xs lg:text-xl text-center">Luxury Room</p>
                        <CountUpNumber duration={5000} endValue={20} />
                    </div>
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <p className="text-xs lg:text-xl text-center">Suite</p>
                        <CountUpNumber duration={5000} endValue={10} />
                    </div>
                </div>
            </div>

            {section2}
        </section>
    );
};

export default ClientComponent;
