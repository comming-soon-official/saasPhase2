import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Tabs = () => {
  const hello = [
    {
      id: 1,
      Topic: "fe",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia recusandae quos cumque quibusdam voluptates repudiandae aut itaque saepe alias, beatae perspiciatis cupiditate illum, eum fuga? Accusantium doloribus, cum, nobis dolore praesentium distinctio in facilis earum eos delectus cumque, eum porro eligendi deleniti. Ea consectetur officia quos iste optio cum expedita. Illum, molestias nulla quas recusandae repellendus obcaecati veritatis ad nemo dignissimos iste exercitationem suscipit assumenda, magni maiores explicabo? Optio corrupti dolores, excepturi sed quam rem voluptate eveniet! Porro accusamus dolor eos illum ea doloribus repudiandae cumque. Eaque, exercitationem doloremque. Earum vel voluptas dignissimos magnam necessitatibus nesciunt obcaecati incidunt voluptatibus.",
    },
    {
      id: 2,
      Topic: "ef",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia recusandae quos cumque quibusdam voluptates repudiandae aut itaque saepe alias, beatae perspiciatis cupiditate illum, eum fuga? Accusantium doloribus, cum, nobis dolore praesentium distinctio in facilis earum eos delectus cumque, eum porro eligendi deleniti. Ea consectetur officia quos iste optio cum expedita. Illum, molestias nulla quas recusandae repellendus obcaecati veritatis ad nemo dignissimos iste exercitationem suscipit assumenda, magni maiores explicabo? Optio corrupti dolores, excepturi sed quam rem voluptate eveniet! Porro accusamus dolor eos illum ea doloribus repudiandae cumque. Eaque, exercitationem doloremque. Earum vel voluptas dignissimos magnam necessitatibus nesciunt obcaecati incidunt voluptatibus.",
    },
    {
      id: 3,
      Topic: "dfdf",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia recusandae quos cumque quibusdam voluptates repudiandae aut itaque saepe alias, beatae perspiciatis cupiditate illum, eum fuga? Accusantium doloribus, cum, nobis dolore praesentium distinctio in facilis earum eos delectus cumque, eum porro eligendi deleniti. Ea consectetur officia quos iste optio cum expedita. Illum, molestias nulla quas recusandae repellendus obcaecati veritatis ad nemo dignissimos iste exercitationem suscipit assumenda, magni maiores explicabo? Optio corrupti dolores, excepturi sed quam rem voluptate eveniet! Porro accusamus dolor eos illum ea doloribus repudiandae cumque. Eaque, exercitationem doloremque. Earum vel voluptas dignissimos magnam necessitatibus nesciunt obcaecati incidunt voluptatibus.",
    },
  ];

  return (
    <div className="max-w-7xl px-5 mx-auto mt-32 text-center">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-primary p-1">
          {hello.map((topic, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-lg leading-5 text-darkring-offset-primary font-ibm",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                  selected
                    ? "bg-base-100 shadow font-semibold"
                    : "text-base-100 hover:bg-white/[0.12] hover:text-white "
                )
              }
            >
              {topic.Topic}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {hello.map((posts, i) => (
            <Tab.Panel key={i} className={"rounded-xl  p-3 bg-base-200"}>
              {posts.paragraph}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
