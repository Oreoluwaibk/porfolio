import React from 'react';
import Footer from '../reusable/Footer';
import Header from '../reusable/Header';
import { Button, Form, Input } from 'antd';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";


const FormItem = Form.Item;
const Contact = () => {

    const handleSubmit = (form) => {
        console.log(form);
    }

    return (
    <div className="m-0 p-0 relative h-screen flex flex-col justify-between">
        <Header active="contact" />
        <div className="px-8 md:px-52 flex flex-col text-gray-300 no-scroll-bar overflow-y-scroll">
            <h1 className="text-4xl font-bold italic mb-2">Ready to get in touch?</h1>
            <p className="italic font-light mb-4">Get in touch or shoot me an email directly on oreoluwa.ibikunle1@gmail.com</p>


            <Form autoSave className="w-full md:w-2/3" layout="vertical" onFinish={handleSubmit}>
                <FormItem 
                    name="name" 
                    rules={[{required: true, message: "Please enter your name"}]}
                >
                    <Input className="text-sec italic font-semibold" placeholder='Name' type="name" size="large" />
                </FormItem>
                <FormItem name="email" rules={[{required: true, message: "Please enter your email"}]}>
                    <Input className="text-sec italic font-semibold" placeholder='Email' type="email" size="large" />
                </FormItem>
                <FormItem name="phone_number" rules={[{required: true, message: "Please enter your phone number"}]}>
                    <PhoneInput
					    country="us"
                        className="text-sec italic font-semibold"
                        inputStyle={{width: "100%"}}	
                        placeholder="Phone Number"			
                    />
                </FormItem>
                <FormItem name="message" rules={[{required: true, message: "Please enter your message"}]}>
                    <Input.TextArea className="text-sec italic font-semibold" type="message" size="large" placeholder='Message'/>
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{width: "150px", height: "52px"}} className="py-2 h-fit bg-sec italic font-bold" htmlType="submit">Send Message</Button>
                </FormItem>
            </Form>
            
        </div>
        <Footer />
    </div>)
}

export default Contact