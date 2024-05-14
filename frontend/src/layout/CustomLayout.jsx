import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import CustomFooter from "../components/customfooter/CustomFooter";
import CustomNavbar from "../components/customnavbar/CustomNavbar";

const { Header, Content, Footer } = Layout;

const CustomLayout = () => {
  return (
    <Layout>
      <Header
        style={{
          height: "inherit",
          position: "sticky",
          top: 0,
          zIndex: 1,
          padding: 0,
        }}
      >
        <CustomNavbar />
      </Header>
      <Content
        style={{
          backgroundColor: "white",
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#1B1F2E",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
