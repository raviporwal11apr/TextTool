import React from 'react'

const About = (props) => {
    return (
        <>
            <section class="about-content py-3 mb-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="about-content-header text-center pb-5">
                                <h3 class="fs-4 fw-bold" style={props.theme === 'dark' ? { color: 'white' } : { color: 'black' }}>
                                    Welcome to About Page
                                </h3>
                                <p class="text-secondary small">Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis omnis quam blanditiis? Porro nam tempore iure magni! Excepturi animi maxime iste facilis voluptas similique eum mollitia molestiae molestias sit.</p>
                                <a href="/" class="btn btn-sm btn-success d-inline-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-2 bi bi-file-text-fill" viewBox="0 0 16 16">
                                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                    </svg>
                                    About the App
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5 align-items-center">
                        <div class="col-md-4">
                            <div class="about-content-image">
                                <img class="rounded img-fluid full-width mb-3 mb-md-0" src="https://i2.wp.com/primeinspire.com/wp-content/themes/primeinspire2.0/img/main-header.jpg" alt="Content Profile" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <p class="text-secondary small">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque, eum nihil distinctio necessitatibus laudantium sit eos libero quae voluptatem repellendus fugiat ea saepe dolores autem, explicabo dolor magni veritatis.
                            </p>
                            <p class="text-secondary small">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum neque perspiciatis ipsum facere eligendi impedit harum, aliquam debitis possimus necessitatibus rerum atque placeat sapiente praesentium cum ullam officia itaque. Ducimus!
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p class="text-secondary small">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque, eum nihil distinctio necessitatibus laudantium sit eos libero quae voluptatem repellendus fugiat ea saepe dolores autem, explicabo dolor magni veritatis.
                            </p>
                            <p class="text-secondary small">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum neque perspiciatis ipsum facere eligendi impedit harum, aliquam debitis possimus necessitatibus rerum atque placeat sapiente praesentium cum ullam officia itaque. Ducimus!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;

