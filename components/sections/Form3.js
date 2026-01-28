import { useState } from "react";
import { sendForm1 } from "../../http/form1Api"; // Axios API

export default function Form3() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, files: Array.from(files) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            alert("Name and Email are required");
            return;
        }

        setLoading(true);
        try {
            const response = await sendForm1(formData);

            // Popup show karne ke liye
            setShowSuccess(true);

            // Form reset
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Agar alert bhi chahiye to ye use kar sakte ho
            // alert(response.message);
        } catch (err) {
            alert(err.error || "Something went wrong!");
        }
        setLoading(false);
    };


    return (
        <section className="form-section mr_bottom_minus_250 position-relative z_1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="contact_form_box_all style_one bg_14 bg_op_4 mr_right_40 z_1"
                            style={{ backgroundImage: 'url(assets/images/form-shape-1.png)' }}
                        >
                            <div className="section_title color_white type_one">
                                <h4 className="sm_title">Check Your Favorite Insurance</h4>
                                <div className="title_whole">
                                    <h2 className="title">Get Started Favorite Insurance</h2>
                                </div>
                            </div>

                            <div className="contact_form_shortcode">
                                <form onSubmit={handleSubmit}>
                                    <div className="forms-field-name mr_bottom_20">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="forms-field-email mr_bottom_20">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            spellCheck="false"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="forms-field-name mr_bottom_20">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject (Optional)"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="forms-field-name mr_bottom_20">
                                        <textarea
                                            name="message"
                                            placeholder="Additional Information... (Optional)"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" disabled={loading}>
                                        {loading ? "Sending..." : "Submit"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {showSuccess && (
                        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999 }}>
                            <div className="bg-white rounded shadow p-5 text-center" style={{ maxWidth: "500px", animation: "fadeIn 0.5s" }}>
                                <div className="mb-4">
                                    <i className="fas fa-check-circle text-primary" style={{ fontSize: "60px" }}></i>
                                </div>
                                <h4 className="text-primary mb-3">Message Sent Successfully!</h4>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    className="theme_btn mt-3"
                                    onClick={() => setShowSuccess(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="col-lg-6 col-md-12 mr_left_minus_100">
                        <div className="image_box_only type_nine">
                            <img src="/assets/images/form-image-1.jpg" className="img-fluid" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
