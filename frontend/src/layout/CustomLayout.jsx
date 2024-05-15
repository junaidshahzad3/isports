import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import CustomNavbar from "../components/shared/CustomNavbar";
import CustomFooter from "../components/shared/CustomFooter";
import MarqueeText from "../components/shared/MarqueeText";

const { Header, Content, Footer } = Layout;

const CustomLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <MarqueeText filter="small" />
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
