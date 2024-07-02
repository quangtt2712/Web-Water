import React from "react";
import './section1_home.css';

const Section1_home = () => {
    return (
        <section className="section1_home">
            <div className="container">
                <div className="gird-container">
                    <div className="number-1">loại khoáng giúp bạn đẹp hơn mỗi ngày</div>
                    <div className="number-2">
                        <div className="tilte-number-2">
                            Bicarbonate
                        </div>
                        <div className="box-layout">
                            <div className="name-khoang">
                                HCO
                                <sub>3</sub>
                                -
                            </div>
                            <div className="description-name-khoang">
                                Giúp giảm độ acid trong dạ dày, tốt cho hệ tiêu hóa.
                            </div>
                        </div>

                    </div>
                    <div class="number-3">
                        <div class="number-item"><span>1</span></div>
                        <div class="number-item"><span>2</span></div>
                        <div class="number-item"><span>3</span></div>
                        <div class="number-item"><span>4</span></div>
                        <div class="number-item"><span>5</span></div>
                        <div class="number-item"><span>6</span></div>
                        <div class="number-item"><span>7</span></div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Section1_home;
