import { v4 as uuidv4 } from "uuid";
import Parse from "./parseService";

const Image = Parse.Object.extend("image");
const Text = Parse.Object.extend("text");
const Object = Parse.Object.extend("object");
const Structured = Parse.Object.extend("structured");
const Regression = Parse.Object.extend("regression");
const user = Parse.User.current();

export const getImagePipeline = () => {
  const query = new Parse.Query(Image);
  query.equalTo("userId", user);
  return query
    .find()
    .then((res) => res)
    .catch((err) => err);
};
export const getTextPipeline = () => {
  const query = new Parse.Query(Text);
  query.equalTo("userId", user);
  return query
    .find()
    .then((res) => res)
    .catch((err) => err);
};
export const getObjectPipeline = () => {
  const query = new Parse.Query(Object);
  query.equalTo("userId", user);
  return query
    .find()
    .then((res) => res)
    .catch((err) => err);
};
export const getStructuredPipeline = () => {
  const query = new Parse.Query(Structured);
  query.equalTo("userId", user);
  return query
    .find()
    .then((res) => res)
    .catch((err) => err);
};
export const getRegressionPipeline = () => {
  const query = new Parse.Query(Regression);
  query.equalTo("userId", user);
  return query
    .find()
    .then((res) => res)
    .catch((err) => err);
};
export const addImageProject = () => {
  const addImageProj = new Image();
  addImageProj.set("topic", user.get("topic"));
  addImageProj.set("dataset", user.get("dataset"));
  addImageProj.set("model", user.get("model"));
  addImageProj.set("discription", user.get("discription"));
  addImageProj.set("stage", "gradcam++");
  addImageProj.set("date", new Date());
  addImageProj.set("projectId", uuidv4());
  addImageProj.set("userId", user);
  addImageProj.set("deleted", false);
  return addImageProj
    .save()
    .then((res) => res)
    .catch((err) => err);
};
export const addTextProject = () => {
  const addTextProj = new Text();
  addTextProj.set("topic", user.get("topic"));
  addTextProj.set("dataset", user.get("dataset"));
  addTextProj.set("model", user.get("model"));
  addTextProj.set("discription", user.get("discription"));
  addTextProj.set("embedded", user.get("embedded"));
  addTextProj.set("stage", "modelling");
  addTextProj.set("date", new Date());
  addTextProj.set("projectId", uuidv4());
  addTextProj.set("userId", user);
  addTextProj.set("deleted", false);
  return addTextProj
    .save()
    .then((res) => res)
    .catch((err) => err);
};
