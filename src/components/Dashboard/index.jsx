// import { useState } from 'react';
// import {
//   //DesktopOutlined,
//   //FileOutlined,
//   PieChartOutlined,
//   //TeamOutlined,
//   //UserOutlined,
// } from '@ant-design/icons';
// import {  Layout, Menu, theme } from 'antd';
// import { Outlet } from 'react-router-dom';
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Inventory ', 'inventory', <PieChartOutlined />),
// ];

// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             <Outlet />
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default Dashboard;