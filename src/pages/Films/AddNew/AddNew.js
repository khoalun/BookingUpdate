import React, { useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addFilmUploadImageAction } from "../../../actions/ManageFilmAction";
import { GROUPID } from "../../../util/settings/config";

const AddNew = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUPID,
    },
    onSubmit: (values) => {
      console.log("values", values);
      // Create Object fomrdata => Đưa giá trị từ formik vào formData
      values.maNhom = GROUPID;
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      console.log("form", formData);
      // call api to send formData to backend handle
      dispatch(addFilmUploadImageAction(formData));
      //   console.log("formData", formData.get("File"));
    },
  });
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeDatePicker = (value) => {
    console.log("datepickerchange", moment(value).format("DD/MM/YYYY"));
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeFile = (e) => {
    // lay file ra tu e
    let file = e.target.files[0];
    if (
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      console.log("file", file);
      // create object to read file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
      formik.setFieldValue("hinhAnh", file);
    }
  };
  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Add New Film</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Movie">
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Description">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Day Release">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item label="Upcoming Film">
          <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Current Film">
          <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch name="hot" onChange={handleChangeSwitch("hot")} />
        </Form.Item>

        <Form.Item label="Star Number">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>

        <Form.Item label="Image">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg ,image/gif, image/jpeg"
          />
          <br />
          <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="Action">
          <button
            type="submit"
            className="bg-gray-600 text-white p-2 rounded-lg"
          >
            Add Film
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNew;
