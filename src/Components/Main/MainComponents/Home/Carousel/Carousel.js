import React from 'react'
import './Carousel.css'
export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-block justify-content-center item123">
                            <div className="overlay">
                                <h4>First Slide</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur soluta doloremque ipsa modi cum assumenda voluptatibus qui dolor perferendis harum debitis, nesciunt error quaerat suscipit! Libero sapiente quos repellendus suscipit dolorum cumque, rem delectus ab perferendis sequi aperiam. Quibusdam molestias amet consectetur voluptas asperiores sapiente illum accusamus numquam illo atque!</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block item123">
                            <div className="overlay">
                                <h4>Second Slide</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto obcaecati unde impedit ex magnam dolore libero mollitia temporibus accusamus vero quidem, rerum ullam molestiae alias quae velit. Alias, fugit illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block item123">
                            <div className="overlay">
                                <h4>Third Slide</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minus expedita et nobis laboriosam itaque error temporibus dolorem voluptates dicta, tempore ipsam quam harum magnam voluptas inventore consectetur delectus animi!
                                Molestiae rerum facere aliquam incidunt unde enim. Suscipit asperiores obcaecati eos, veritatis architecto nihil optio excepturi voluptate laudantium cum mollitia iusto modi velit quasi aspernatur repudiandae eveniet beatae. Laborum, ipsum.
                                Esse sunt laborum voluptate accusantium sit modi vel fuga deserunt? Labore at mollitia aperiam enim! Ad neque, ipsum odit recusandae placeat quasi eos voluptate sunt, iste obcaecati totam nam necessitatibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
