//  import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar } from "react-bootstrap";
import ourspaceshipafrica2k from "./pics/ourspaceshipafrica2k-1@2x.png";
import frame from "./pics/frame.svg"
import frame1 from "./pics/frame1.svg"
import frame2 from "./pics/frame2.svg"
import frame3 from "./pics/frame3.svg"
import frame4 from "./pics/frame4.svg"
import frame5 from "./pics/frame5.svg"
import frame6 from "./pics/frame6.svg"
import frame7 from "./pics/frame7.svg"
import frame8 from "./pics/frame8.svg"
import group4 from "./pics/group-4.svg"
import group23 from "./pics/group-23.svg"
import group31 from "./pics/group-24.svg"
import group24 from "./pics/group-31.svg"
import ellipse from "./pics/ellipse-8.svg";
import { InfoState } from './Context';
import { useNavigate } from "react-router-dom";
const ExerciseData = () => {
    const {distance_ex,setDistance_ex,cal,setCal,duration,setDuration} = InfoState();
    const navigate = useNavigate();
    const func=()=>{
      navigate('/')
    }
  return (
    <div className="relative w-full h-[1200px] overflow-hidden text-left text-lg text-white font-manrope bg-gray-950">
      <button className="bg-transparent" style={{color:"white"}} onClick={func}>&#x2190;</button>
      <div className="absolute top-[88px] left-[80px] rounded-[40px] bg-gray-300 shadow-[0px_4px_70px_rgba(0,_0,_0,_0.15)] box-border w-[1440px] h-[1024px] overflow-hidden text-sm border-[1px] border-solid border-gray-100">
        <img
          className="absolute top-[227px] left-[0px] w-[1440px] h-[841px] object-cover opacity-[0.8]"
          alt=""
          src={ourspaceshipafrica2k}
        />
        <div className="absolute top-[275px] left-[62px] w-[586px] h-[54px]">
          <Button
            className="absolute top-[0px] left-[48px]"
            variant="outline-primary"
          >
            Today
          </Button>
          <Button
            className="absolute top-[1px] left-[191px]"
            variant="outline-primary"
          >
            Yesterday
          </Button>
          <Button
            className="absolute top-[0px] left-[347px]"
            variant="outline-primary"
          >
            10/5/23
          </Button>
          <img
            className="absolute top-[11px] left-[554px] w-8 h-8 overflow-hidden"
            alt=""
            src={frame}
          />
          <img
            className="absolute top-[11px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src={frame1}
          />
        </div>
        <div className="absolute top-[358px] left-[62px] rounded-xl bg-gray-400 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.17)] [backdrop-filter:blur(60px)] w-[586px] h-[506px]">
          <img
            className="absolute top-[151px] left-[179px] w-12 h-12 overflow-hidden"
            alt=""
            src={frame2}
          />
          <div className="absolute top-[38px] left-[30px] text-[20px] tracking-[0.02em] font-medium">{`Time Played `}</div>
          <div className="absolute top-[31px] left-[424px] rounded-xl flex flex-row py-2.5 px-5 items-center justify-center gap-[10px] text-[16px] border-[1px] border-solid border-dimgray-200">
            <div className="relative tracking-[0.02em]">This year</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src={frame3}
            />
          </div>
          <div className="absolute top-[165px] left-[30px] tracking-[0.02em] text-darkgray">
            compared to last year
          </div>
          <div className="absolute top-[115px] left-[196px] text-5xl tracking-[0.02em] font-semibold text-limegreen">
            mins
          </div>
          <div className="absolute top-[83px] left-[30px] text-[54px] font-extrabold">{duration}</div>
          <div className="absolute top-[216px] left-[44px] w-[512px] h-[33px] text-right">
            <div className="absolute top-[9px] left-[455px] tracking-[0.02em] font-semibold">
              {duration/6} MINS
            </div>
            <ProgressBar className="w-[268px] absolute top-[14px] left-[163px]" />
            <div className="absolute top-[0px] left-[0px] text-5xl tracking-[0.02em] font-medium text-left">
              9.30 AM
            </div>
          </div>
          <div className="absolute top-[274px] left-[43px] w-[513px] h-[33px] text-right">
            <div className="absolute top-[6px] left-[459px] tracking-[0.02em] font-semibold">
              {duration/2} MINS
            </div>
            <div className="absolute top-[11px] left-[164px]">
              <div className="relative rounded-[100px] bg-mediumturquoise w-[186px] h-2" />
            </div>
            <div className="absolute top-[0px] left-[0px] text-5xl tracking-[0.02em] font-medium text-left">
              12.00PM
            </div>
          </div>
          <div className="absolute top-[331px] left-[43px] w-[513px] h-[33px] text-right">
            <div className="absolute top-[10px] left-[466px] tracking-[0.02em] font-semibold">
              {duration/6} MINS
            </div>
            <ProgressBar className="w-[268px] absolute top-[16px] left-[164px]" />
            <div className="absolute top-[0px] left-[0px] text-5xl tracking-[0.02em] font-medium text-left">
              5.00 PM
            </div>
          </div>
          <div className="absolute top-[402px] left-[30px] w-[526px] h-[33px] text-right">
            <div className="absolute top-[2px] left-[472px] tracking-[0.02em] font-semibold">
              {duration/6} MINS
            </div>
            <ProgressBar className="w-[268px] absolute top-[7px] left-[177px]" />
            <div className="absolute top-[0px] left-[0px] w-[107px] h-[33px] flex flex-row pt-px px-0 pb-0 box-border items-start justify-start text-left text-5xl">
              <div className="relative w-[26.67px] h-5 overflow-hidden shrink-0" />
              <div className="relative tracking-[0.02em] font-medium ml-[-13px]">
                9.00 PM
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[33px] left-[1354px] w-6 h-6 overflow-hidden"
          alt=""
          src={frame4}
        />
        <div className="absolute top-[114px] left-[73px] text-[48px] font-extrabold">
          Exercise statistics
        </div>
        <div className="absolute top-[192px] left-[78px] text-lg tracking-[0.04em]">{`Data visualization `}</div>
        <img
          className="absolute top-[33px] left-[1301px] w-6 h-6 overflow-hidden"
          alt=""
          src={frame5}
        />
        <div className="absolute top-[133px] left-[1321px] rounded-xl bg-gray-400 shadow-[0px_4px_30px_rgba(0,_0,_0,_0.17)] [backdrop-filter:blur(60px)] w-[57px] h-[108px]" />
        <img
          className="absolute top-[148px] left-[1336px] w-7 h-7 overflow-hidden"
          alt=""
          src={frame6}
        />
        <img
          className="absolute top-[198px] left-[1336px] w-7 h-7 overflow-hidden"
          alt=""
          src={frame7}
        />
      </div>
      <div className="absolute top-[907px] left-[376px] rounded-xl bg-gray-200 shadow-[0px_4px_40px_rgba(0,_0,_0,_0.19)] w-[277px] h-[260px]">
        <div className="absolute top-[30px] left-[102px] tracking-[0.02em]">
          Distance
        </div>
        <b className="absolute top-[63px] left-[102px] text-5xl tracking-[0.02em]">
          {distance_ex}
        </b>
        <img
          className="absolute top-[30px] left-[30px] w-[54px] h-[66px]"
          alt=""
          src={group24}
        />
        <img
          className="absolute top-[121px] left-[29.13px] w-[217.57px] h-[105.25px]"
          alt=""
          src={group23}
        />
      </div>
      <div className="absolute top-[907px] left-[59px] w-[277px] h-[260px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_4px_40px_rgba(0,_0,_0,_0.19)] w-[277px] h-[260px]">
          <div className="absolute top-[30px] left-[102px] tracking-[0.02em]">
            Calories
          </div>
          <b className="absolute top-[63px] left-[102px] text-5xl tracking-[0.02em]">
            {cal}
          </b>
          <div className="absolute top-[30px] left-[30px] rounded-xl bg-mediumturquoise w-[54px] h-[66px]" />
          <img
            className="absolute top-[145px] left-[29px] w-[211px] h-[88px]"
            alt=""
            src={group4}
          />
          <img
            className="absolute top-[51px] left-[45px] w-6 h-6 overflow-hidden"
            alt=""
            src={frame8}
          />
        </div>
        <img
          className="absolute top-[123px] left-[178px] w-3 h-3"
          alt=""
          src={ellipse}
        />
        <div className="absolute top-[113px] left-[183px] w-0 h-[99px]" />
      </div>
      <img
        className="absolute top-[1032px] left-[510px] w-3 h-[99px]"
        alt=""
        src={group31}
      />
    </div>
  );
};

export default ExerciseData;