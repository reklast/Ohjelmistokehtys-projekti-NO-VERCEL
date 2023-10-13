"use client";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import React, { useState } from "react";

import TextArea from "antd/es/input/TextArea";
import { useSession } from "next-auth/react";

import styles from './AddNewsButton.module.scss'

function AddNewsButton() {
    const {data: session} = useSession();
  // Modal state
  const [open, setOpen] = useState(false);

  const createNews = async (value: {
      content: any; title: any; date: any; 
}) => {
    const res = await fetch('/api/db/dbNews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: value.title,
          date: value.date.format('DD.MM.YYYY'),
          content: value.content
        }),
      });
      console.log(res)
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleSubmit = async (value: any) => {
    console.log(value)
    setOpen(false);
    createNews(value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  type FieldType = {
    title: string;
    date: string;
    content: string;
  };

  return (
    <>
        <div className={styles.addButton}>
          { session?.user.name === 'admin' && <Button onClick={showModal} icon={<PlusOutlined />}></Button> }
        </div>
        <Modal
          open={open}
          title="Lisää tapahtuma"
          onCancel={handleCancel}
          okButtonProps={{form: "myForm", htmlType: 'submit'}}
        >
           <Form
        id="myForm"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
        method="POST"
      >
        <Form.Item<FieldType>
          label="Otsikko"
          name="title"
          rules={[{ required: true, message: "Please input title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Päivämäärä"
          name="date"
          rules={[{ required: true, message: "Please input date" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item<FieldType>
          label="Sisältö"
          name="content"
          rules={[{ required: true, message: "Please input content" }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
        </Modal>
    </>
  );
}

export default AddNewsButton;
