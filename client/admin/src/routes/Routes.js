import { Route, Routes} from "react-router-dom";
import styles from "./Routes.module.css";
// import Header from "../components/molecules/Header";
import Login from "../pages/Login/Login";

const RoutesStack = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  // const headerButtons = {
  //   '/classes': {
  //     buttonText: 'Add Class',
  //     onClick: () => {
  //       navigate('/add-class')
  //     },
  //   },
  //   '/packages': {
  //     buttonText: 'Add Package',
  //     onClick: () => {
  //       navigate('/add-package')
  //     },
  //   },
  // };
  // const currentPath = location.pathname;

  return (
    <>
      <div className={styles.mainDashboard}>
        {/* <Header
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          haveButton={!!headerButtons[currentPath]}
          ButtonText={headerButtons[currentPath]?.buttonText}
          onClick={headerButtons[currentPath]?.onClick} /> */}
        <Routes>
          
          <Route path="/login" element={<Login />} />
          
          {/* <Route path="/website-content" element={<WebsiteContent />} /> */}
          


          {/* <Route path="/" element={<AdminDashboard />} /> */}
        
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;