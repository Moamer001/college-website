"use clinet";
import "../index.css";
import React, { useTransition, useState } from "react";
import TabButton from "./tabButton";
import { DETALIS_DEPT } from "../damyData";



const Departe = () => {
    const [tab, setTap] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTap(id);
        });
    };

    return (
        <section className=" h-auto py-6 mt-8 gap-4" id="dept" >
            <div className="text-gradient"><h1 className="text-4xl md:text-4xl font-bold shadow-md px-8" >
                الاقسام العلمية
            </h1></div>

            {DETALIS_DEPT.map((data) => (
                <div
                    className="text-black md:grid md:grid-cols-2 gap-8 items-center py-16 px-4 xl:gap-16 sm:py-16 xl:px-16 h-auto"
                    key={data.id}
                >
                    <img src={data.img} alt="Department Logo" width={500} height={500} />
                    <div className="mt-4 md:mt-0  flex flex-col h-full ">
                        <h2 className="text-3xl font-bold  mb-4">{data.dept}</h2>
                        <p className="text-base lg:text-lg ">{data.desc}</p>
                        <div className="flex flex-row justify-start mt-8 ">
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                أهداف القسم
                            </TabButton>

                            <TabButton
                                selectTab={() => handleTabChange("Education")}
                                active={tab === "Education"}
                            >
                                متطلبات القسم
                            </TabButton>
                        </div>
                        <div className="mt-8 h-16 md:mb-10">
                            {data.detalis.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Departe;
