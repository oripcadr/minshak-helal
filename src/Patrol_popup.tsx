
import './Patrol_popup.css'
import p_details_1 from './assets/p_details_1.png'
import p_details_2 from './assets/p_details_2.png'
import more_icon from './assets/more_icon.png'
import p_details_3 from './assets/p_details_3.png'

import g_dot from './assets/g_dot.png'
import y_dot from './assets/y_dot.png'
import r_dot from './assets/r_dot.png'

import close from './assets/close.png'
import p_2_p_b from './assets/p_2_p_b.png'
import patrol_popup_map from './assets/patrol_popup.png'
import { useEffect, useState } from "react";

function Patrol_popup(props: any) {
  const [points, set_points] = useState([]);
  console.log("PROPS :", props);

  function getTime(value) {
    if (!value) return "";
    return new Date(value).toLocaleTimeString("he-IL", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    const points = JSON.parse(props.worker_popup_data?.points || "[]");
    set_points(points);

    console.log(
      "map image:",
      globalThis.app.current + "/" + props.worker_popup_data?.image_map,
    );
  }, []);
  return (
    <>
      <div
        className="worker_popup_cont"
        onClick={() => props.set_show_worker_popup(false)}
      >
        <img src={close} className="close_icon" />
        <div className="worker_popup_header">
          <img src={p_2_p_b} className="user_b" />
          <div className="user_b_text_cont">
            <div className="user_b_text_main">
              {props.worker_popup_data?.name}
            </div>
            <div className="user_b_text_submain">
              {props.worker_popup_data?.status}
              <img src={g_dot} />
            </div>
          </div>
        </div>

        <div className="worker_popup_top_area">
          <div className="worker_popup_top_area_right">
            <img src={more_icon} className="w_more_icon" />
            <img src={p_details_1} className="p_details_1" />
            <div className="p_details_title">פרטי המבצעים</div>

            <div className="details_cont details_cont_first">
              <div className="details_cont_r"> מבצע סיור:</div>
              <div className="details_cont_b">
                {" "}
                {props.worker_popup_data?.guard} (מאבטח)
              </div>
            </div>

            <div className="details_cont">
              <div className="details_cont_r">אחמ"ש אחראי:</div>
              <div className="details_cont_b">
                {" "}
                {props.worker_popup_data?.supervisor}
              </div>
            </div>
          </div>

          <div className="worker_popup_top_area_right">
            <img src={more_icon} className="w_more_icon" />
            <img src={p_details_2} className="p_details_1" />
            <div className="p_details_title">זמני הסיור</div>

            <div className="details_cont details_cont_first">
              <div className="details_cont_r">שעת התחלה:</div>
              <div className="details_cont_b">
                {getTime(props.worker_popup_data?.start_time)}
              </div>
            </div>

            <div className="details_cont">
              <div className="details_cont_r">שעת סיום:</div>
              <div className="details_cont_b">
                {getTime(props.worker_popup_data?.end_time)}
              </div>
            </div>
          </div>
        </div>

        <div className="worker_popup_mid_area worker_popup_mid_area_p">
          <img src={more_icon} className="w_more_icon" />
          <img src={p_details_3} className="p_details_1" />
          <div className="p_details_title">מפת סיור</div>

          <div className="points_cont">
            <div className="point_title_row">
              <div className="point_title">נקודה</div>
              <div className="point_title">סטטוס</div>
            </div>
            {points.map((point, ind) => {
              return (
                <div key={ind}>
                  <div className="point_title_row">
                    <div className="point_title_text">{point.name}</div>
                    <div className="point_title_text">
                      <img
                        src={
                          point.status == "לא דווחה"
                            ? r_dot
                            : point.status == "ממתינה"
                              ? y_dot
                              : g_dot
                        }
                        className="dot_point"
                      />
                      {point.status}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="point_title_row">
              <div className="point_title_text">2 לובי קומה 1</div>
              <div className="point_title_text">
                <img src={y_dot} className="dot_point" />
                ממתינה
              </div>
            </div>

            <div className="point_title_row">
              <div className="point_title_text">3 כניסה ראשית</div>
              <div className="point_title_text">
                <img src={g_dot} className="dot_point" />
                נסרקה
              </div>
            </div>

            <div className="point_title_row">
              <div className="point_title_text">4 לובי קומה 1</div>
              <div className="point_title_text">
                <img src={y_dot} className="dot_point" />
                ממתינה
              </div>
            </div>

            <div className="point_title_row">
              <div className="point_title_text">5 כניסה ראשית</div>
              <div className="point_title_text">
                <img src={g_dot} className="dot_point" />
                נסרקה
              </div>
            </div>

            <div className="point_title_row">
              <div className="point_title_text">6 לובי קומה 1</div>
              <div className="point_title_text">
                <img src={y_dot} className="dot_point" />
                ממתינה
              </div>
            </div>

            <div className="point_title_row">
              <div className="point_title_text">7 לובי קומה 1</div>
              <div className="point_title_text">
                <img src={r_dot} className="dot_point" />
                לא דווחה
              </div>
            </div> */}
          </div>
          {/* 
          <img
            src={
              globalThis.app.current + "/" + props.worker_popup_data?.image_map
            }
            className="patrol_popup_map"
          /> */}
          <img src={patrol_popup_map} className="patrol_popup_map" />
        </div>
      </div>
    </>
  );
}

export default Patrol_popup