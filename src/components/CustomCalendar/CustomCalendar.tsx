"use client";

import React, { ReactElement, useState } from "react";
import {
  Avatar,
  Calendar,
  Collapse,
  Empty,
  FloatButton,
  Modal,
  Tooltip,
} from "antd";

import styles from "./CustomCalendar.module.scss";
import dayjs from "dayjs";
import { ScheduleOutlined, UserOutlined } from "@ant-design/icons";

// function to disable all dates before today
const onDisabledDate = (date: any): boolean => {
  return new Date() > new Date(date) &&
    new Date().getDate() !== new Date(date).getDate()
    ? true
    : false;
};

const calendarEvents = [
  {
    eventName: "synttäri",
    eventDate: "20.10.2023",
    eventTime: "16:15",
    eventInfo:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas pariatur quo accusamus aliquid fuga dolore unde ducimus quas, eum molestias illum, minus deleniti fugiat. Maiores fugit quam velit. Sequi, obcaecati",
    eventAssociates: [
      {
        name: "John",
        surname: "Doe",
        profilePic:
          "https://preview.redd.it/psbattle-this-dog-staring-at-the-camera-v0-4q2c1zaf92h81.jpg?width=640&crop=smart&auto=webp&s=9478bc7586da83e13da82622161bde4733d39062",
      },
      {
        name: "Jane",
        surname: "Doe",
        profilePic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD_vkOVUL12qEHcdyq6oO1hIpIeSJuhVIIyGSMFR3mcmvPP5rWOU8u-7R8hBNYpDOYv4&usqp=CAU",
      },
    ],
  },
  {
    eventName: "test nimi",
    eventDate: "13.10.2023",
    eventTime: "9:30",
    eventInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptates, laboriosam illum tempore excepturi ad, tempora laborum voluptatem nostrum placeat dolores mollitia? Quam tempore, maiores facere explicabo sed at blanditiis aperiam, dolor obcaecati eos voluptates.",
    eventAssociates: [
      {
        name: "Kitty",
        surname: "Cat",
        profilePic: "https://pbs.twimg.com/media/FZ_5BiFX0AAox13.jpg",
      },
    ],
  },
  {
    eventName: "Muutto",
    eventDate: "20.10.2023",
    eventTime: "10:00",
    eventInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non, illo, voluptatibus, atque ut dolores ducimus dolorum tenetur totam id soluta? Libero esse at in recusandae illo voluptates fuga reprehenderit",
    eventAssociates: [
      {
        name: "Bob",
        surname: "Bob",
        profilePic:
          "https://preview.redd.it/jotchua-evil-twin-brother-v0-vnlgg9hj709a1.jpg?width=640&crop=smart&auto=webp&s=3a6a21ce81274a3c5fe9ea1e7def0e8bf8906746",
      },
    ],
  },
];

function CustomCalendar(): ReactElement {
  // Modal section
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("DD.MM.YYYY")
  );

  const res: any = calendarEvents //TODO: provide correct type
    .filter((event) => event.eventDate === selectedDate)
    .map((event, index) => ({
      key: `${index}`,
      label: (
        <div>
          <div>{event.eventName}</div>
          <div className={styles.eventDate}>
            {event.eventDate} - {event.eventTime}
          </div>
        </div>
      ),
      children: (
        <div>
          <div>{event.eventInfo}</div>
          <div>
            {
              <>
                <h1 className={styles.associatesHeader}>
                  Tapahtuman osallistujia:
                </h1>
                <Avatar.Group size="large" className={styles.associates}>
                  {event.eventAssociates?.map((user, index) => (
                    <Tooltip key={index} title={`${user.name} ${user.surname}`}>
                      {user.profilePic.length > 0 ? (
                        <Avatar src={user.profilePic} />
                      ) : (
                        <Avatar
                          className={styles.avatarNoPic}
                          icon={<UserOutlined />}
                        />
                      )}
                    </Tooltip>
                  ))}
                </Avatar.Group>
              </>
            }
          </div>
        </div>
      ),
      className: styles.announcement,
    }));

  return (
    <>
      <div className={styles.calendarWrap}>
        <Calendar
          className={styles.calendar}
          fullscreen={window.innerWidth > 480 ? true : false}
          disabledDate={(date): boolean => onDisabledDate(date)}
          onSelect={(date) => {
            setSelectedDate(date.format("DD.MM.YYYY"));
          }}
        />
        <div className={styles.eventsHolder}>
          <h1 className={styles.announcementsHeader}>Tapahtumat</h1>
          {calendarEvents.some((event) => event.eventDate === selectedDate) ? (
            <Collapse
              accordion={true}
              items={res}
              size="small"
              className={styles.collapse}
            />
          ) : (
            <Empty />
          )}
        </div>
        <FloatButton
          onClick={showModal}
          icon={<ScheduleOutlined />}
          className={styles.floatButton}
        />
      </div>
      <Modal
        open={open}
        title="Lisää tapahtuma"
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        test content
      </Modal>
    </>
  );
}

export { CustomCalendar };
