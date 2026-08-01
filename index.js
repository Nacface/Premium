try {
    (() => {
        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        var h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__), "drink");
        "use strict";
        let normal_img0 = "";
        let normal_img1 = "";
        let normal_img3 = "";
        let normal_img5 = "";
        let normal_img7 = "";
        let normal_img9 = "";
        let normal_img11 = "";
        let normal_img13 = "";
        let normal_img15 = "";
        let normal_img17 = "";
        let normal_week_imageset20 = "";
        let normal_date_imagecombo21 = "";
        let normal_heart_current_imagecombo23 = "";
        let normal_blood_oxygen_imagecombo25 = "";
        let normal_battery_imagecombo27 = "";
        let normal_steps_imagecombo29 = "";
        let normal_weather_imageset31 = "";
        let normal_temperature_current_imagecombo32 = "";
        let normal_humidity_imagecombo34 = "";
        let timeInterval;
        let normal_hour_imageset36 = "";
        let normal_hour_imageset36_array = ["0113.png", "0114.png", "0115.png", "0116.png", "0117.png", "0118.png", "0119.png", "0120.png", "0121.png", "0122.png", "0123.png", "0124.png", "0125.png", "0126.png", "0127.png", "0128.png", "0129.png", "0130.png", "0131.png", "0132.png", "0133.png", "0134.png", "0135.png", "0136.png"];
        let normal_minute_imagecombo37 = "";
        let normal_second_imagecombo38 = "";
        let normal_img39 = "";
        let normal_heart_shortcut42 = "";
        let normal_spo2_shortcut43 = "";
        let normal_battery_shortcut44 = "";
        let normal_steps_shortcut45 = "";
        let normal_weather_shortcut46 = "";
        let normal_calendar_shortcut47 = "";
        let normal_stopwatch_shortcut48 = "";
        let normal_alarm_shortcut49 = "";
        let normal_settings_shortcut50 = "";
        let idle_img52 = "";
        let idle_hour_imageset53 = "";
        let idle_hour_imageset53_array = ["0159.png", "0160.png", "0161.png", "0162.png", "0163.png", "0164.png", "0165.png", "0166.png", "0167.png", "0168.png", "0169.png", "0170.png", "0171.png", "0172.png", "0173.png", "0174.png", "0175.png", "0176.png", "0177.png", "0178.png", "0179.png", "0180.png", "0181.png", "0182.png"];
        let idle_minute_imagecombo54 = "";
        let idle_img55 = "";
        let container_1785579500510 = "";
        let container_1785579500510_customs = [{
                label: "NARANJA",
                widgets: ["normal_img3"]
            }, {
                label: "VERDE",
                widgets: ["normal_img5"]
            }, {
                label: "ROJO",
                widgets: ["normal_img7"]
            }, {
                label: "AZUL",
                widgets: ["normal_img9"]
            }, {
                label: "AMARILLO",
                widgets: ["normal_img11"]
            }, {
                label: "ROSA",
                widgets: ["normal_img13"]
            }, {
                label: "LILA",
                widgets: ["normal_img15"]
            }, {
                label: "BLANCO",
                widgets: ["normal_img17"]
            }
        ];
        let container_1785579500510_selected = 0;
        const logger = DeviceRuntimeCore.HmLogger.getLogger("yeguang");
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
                init_view() {
                    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
                    let screenType = hmSetting.getScreenType();
                    normal_img0 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 18,
                            y: 183,
                            w: 357,
                            h: 253,
                            src: "0002.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img1 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 21,
                            y: 63,
                            w: 36,
                            h: 100,
                            src: "0003.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img3 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0004.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img5 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0005.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img5.setProperty(hmUI.prop.VISIBLE, false);
                    normal_img7 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0006.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img7.setProperty(hmUI.prop.VISIBLE, false);
                    normal_img9 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0007.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img9.setProperty(hmUI.prop.VISIBLE, false);
                    normal_img11 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0008.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img11.setProperty(hmUI.prop.VISIBLE, false);
                    normal_img13 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0009.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img13.setProperty(hmUI.prop.VISIBLE, false);
                    normal_img15 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0010.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img15.setProperty(hmUI.prop.VISIBLE, false);
                    normal_img17 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0011.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img17.setProperty(hmUI.prop.VISIBLE, false);
                    normal_week_imageset20 = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                            x: 240,
                            y: 249,
                            week_en: ["0013.png", "0014.png", "0015.png", "0016.png", "0017.png", "0018.png", "0019.png"],
                            week_tc: ["0013.png", "0014.png", "0015.png", "0016.png", "0017.png", "0018.png", "0019.png"],
                            week_sc: ["0013.png", "0014.png", "0015.png", "0016.png", "0017.png", "0018.png", "0019.png"],
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_date_imagecombo21 = hmUI.createWidget(hmUI.widget.IMG_DATE, {
                            day_startX: 185,
                            day_startY: 244,
                            day_sc_array: ["0020.png", "0021.png", "0022.png", "0023.png", "0024.png", "0025.png", "0026.png", "0027.png", "0028.png", "0029.png"],
                            day_tc_array: ["0020.png", "0021.png", "0022.png", "0023.png", "0024.png", "0025.png", "0026.png", "0027.png", "0028.png", "0029.png"],
                            day_en_array: ["0020.png", "0021.png", "0022.png", "0023.png", "0024.png", "0025.png", "0026.png", "0027.png", "0028.png", "0029.png"],
                            day_zero: true,
                            day_space: 0,
                            day_align: hmUI.align.CENTER_H,
                            day_is_character: false,
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_heart_current_imagecombo23 = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                            x: 72,
                            y: 196,
                            font_array: ["0030.png", "0031.png", "0032.png", "0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png"],
                            padding: false,
                            h_space: 0,
                            invalid_image: "0040.png",
                            align_h: hmUI.align.CENTER_H,
                            type: hmUI.data_type.HEART,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_blood_oxygen_imagecombo25 = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                            x: 73,
                            y: 263,
                            font_array: ["0030.png", "0031.png", "0032.png", "0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png"],
                            padding: false,
                            h_space: 0,
                            align_h: hmUI.align.CENTER_H,
                            type: hmUI.data_type.SPO2,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_battery_imagecombo27 = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                            x: 73,
                            y: 329,
                            font_array: ["0041.png", "0042.png", "0043.png", "0044.png", "0045.png", "0046.png", "0047.png", "0048.png", "0049.png", "0050.png"],
                            padding: false,
                            h_space: 0,
                            unit_sc: "0051.png",
                            unit_tc: "0051.png",
                            unit_en: "0051.png",
                            align_h: hmUI.align.CENTER_H,
                            type: hmUI.data_type.BATTERY,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_steps_imagecombo29 = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                            x: 101,
                            y: 389,
                            font_array: ["0052.png", "0053.png", "0054.png", "0055.png", "0056.png", "0057.png", "0058.png", "0059.png", "0060.png", "0061.png"],
                            padding: false,
                            h_space: 0,
                            align_h: hmUI.align.CENTER_H,
                            type: hmUI.data_type.STEP,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_weather_imageset31 = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                            x: 298,
                            y: 294,
                            image_array: ["0062.png", "0063.png", "0064.png", "0065.png", "0066.png", "0067.png", "0068.png", "0069.png", "0070.png", "0071.png", "0072.png", "0073.png", "0074.png", "0075.png", "0076.png", "0077.png", "0078.png", "0079.png", "0080.png", "0081.png", "0082.png", "0083.png", "0084.png", "0085.png", "0086.png", "0087.png", "0088.png", "0089.png", "0090.png"],
                            image_length: 29,
                            type: hmUI.data_type.WEATHER_CURRENT,
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_temperature_current_imagecombo32 = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                            x: 201,
                            y: 309,
                            font_array: ["0091.png", "0092.png", "0093.png", "0094.png", "0095.png", "0096.png", "0097.png", "0098.png", "0099.png", "0100.png"],
                            padding: false,
                            h_space: 0,
                            unit_sc: ["0102.png"],
                            unit_tc: ["0102.png"],
                            unit_en: ["0102.png"],
                            negative_image: ["0101.png"],
                            invalid_image: ["0101.png"],
                            align_h: hmUI.align.RIGHT,
                            type: hmUI.data_type.WEATHER_CURRENT,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_humidity_imagecombo34 = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                            x: 293,
                            y: 386,
                            font_array: ["0103.png", "0104.png", "0105.png", "0106.png", "0107.png", "0108.png", "0109.png", "0110.png", "0111.png", "0112.png"],
                            padding: false,
                            h_space: 0,
                            align_h: hmUI.align.LEFT,
                            type: hmUI.data_type.HUMIDITY,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_hour_imageset36 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 75,
                            y: -1,
                            w: 75,
                            h: -1,
                            src: "0136.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_minute_imagecombo37 = hmUI.createWidget(hmUI.widget.IMG_TIME, {
                            minute_startX: 178,
                            minute_startY: 124,
                            minute_array: ["0137.png", "0138.png", "0139.png", "0140.png", "0141.png", "0142.png", "0143.png", "0144.png", "0145.png", "0146.png"],
                            minute_zero: true,
                            minute_space: 0,
                            minute_align: hmUI.align.CENTER_H,
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_second_imagecombo38 = hmUI.createWidget(hmUI.widget.IMG_TIME, {
                            second_startX: 290,
                            second_startY: 157,
                            second_array: ["0147.png", "0148.png", "0149.png", "0150.png", "0151.png", "0152.png", "0153.png", "0154.png", "0155.png", "0156.png"],
                            second_zero: true,
                            second_space: 0,
                            second_align: hmUI.align.CENTER_H,
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_img39 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 0,
                            y: 0,
                            w: 390,
                            h: 452,
                            src: "0157.png",
                            enable: false,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_heart_shortcut42 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 26,
                            y: 188,
                            w: 113,
                            h: 45,
                            src: "",
                            type: hmUI.data_type.HEART,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_spo2_shortcut43 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 25,
                            y: 255,
                            w: 113,
                            h: 43,
                            src: "",
                            type: hmUI.data_type.SPO2,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_battery_shortcut44 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 25,
                            y: 322,
                            w: 134,
                            h: 43,
                            src: "",
                            type: hmUI.data_type.BATTERY,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_steps_shortcut45 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 53,
                            y: 388,
                            w: 155,
                            h: 43,
                            src: "",
                            type: hmUI.data_type.STEP,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_weather_shortcut46 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 225,
                            y: 300,
                            w: 144,
                            h: 59,
                            src: "",
                            type: hmUI.data_type.WEATHER_CURRENT,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_calendar_shortcut47 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 185,
                            y: 242,
                            w: 181,
                            h: 42,
                            text: "",
                            normal_src: "",
                            press_src: "",
                            click_func: () => {
                                hmApp.startApp({
                                    url: "ScheduleCalScreen",
                                    native: true
                                })
                            },
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_stopwatch_shortcut48 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 290,
                            y: 158,
                            w: 47,
                            h: 47,
                            src: "",
                            type: hmUI.data_type.STOP_WATCH,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_alarm_shortcut49 = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                            x: 289,
                            y: 120,
                            w: 48,
                            h: 30,
                            src: "",
                            type: hmUI.data_type.ALARM_CLOCK,
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    normal_settings_shortcut50 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 187,
                            y: 51,
                            w: 59,
                            h: 59,
                            text: "",
                            normal_src: "",
                            press_src: "",
                            click_func: () => {
                                hmApp.startApp({
                                    url: "Settings_homeScreen",
                                    native: true
                                })
                            },
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    idle_img52 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 77,
                            y: 1,
                            w: 285,
                            h: 166,
                            src: "0158.png",
                            enable: false,
                            show_level: hmUI.show_level.ONAL_AOD
                        });
                    idle_hour_imageset53 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 75,
                            y: -1,
                            w: 75,
                            h: -1,
                            src: "0182.png",
                            enable: false,
                            show_level: hmUI.show_level.ONAL_AOD
                        });
                    idle_minute_imagecombo54 = hmUI.createWidget(hmUI.widget.IMG_TIME, {
                            minute_startX: 178,
                            minute_startY: 124,
                            minute_array: ["0137.png", "0138.png", "0139.png", "0140.png", "0141.png", "0142.png", "0143.png", "0144.png", "0145.png", "0146.png"],
                            minute_zero: true,
                            minute_space: 0,
                            minute_align: hmUI.align.CENTER_H,
                            enable: false,
                            show_level: hmUI.show_level.ONAL_AOD
                        });
                    idle_img55 = hmUI.createWidget(hmUI.widget.IMG, {
                            x: 0,
                            y: 0,
                            w: 390,
                            h: 452,
                            src: "0157.png",
                            enable: false,
                            show_level: hmUI.show_level.ONAL_AOD
                        });
                    container_1785579500510 = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 205,
                            y: 148,
                            w: 67,
                            h: 67,
                            text: "",
                            normal_src: "0012.png",
                            press_src: "0012.png",
                            longpress_func: () => {
                                showContainer_1785579500510_menu()
                            },
                            show_level: hmUI.show_level.ONLY_NORMAL
                        });
                    let container_1785579500510_menu_page = 0;
                    let container_1785579500510_menu = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 0,
                            w: 390,
                            h: 452
                        });
                    let container_1785579500510_menu_bg = container_1785579500510_menu.createWidget(hmUI.widget.FILL_RECT, {
                            x: 0,
                            y: 0,
                            w: 390,
                            h: 452,
                            color: 1052688
                        });
                    let container_1785579500510_menu_panel = container_1785579500510_menu.createWidget(hmUI.widget.FILL_RECT, {
                            x: 20,
                            y: 56,
                            w: 350,
                            h: 340,
                            color: 2105376,
                            radius: 10
                        });
                    let container_1785579500510_menu_title = container_1785579500510_menu.createWidget(hmUI.widget.TEXT, {
                            x: 30,
                            y: 66,
                            w: 330,
                            h: 28,
                            text: "COLORES",
                            text_size: 20,
                            color: 16777215,
                            align_h: hmUI.align.CENTER_H
                        });
                    let container_1785579500510_menu_item_0 = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 94,
                            w: 330,
                            h: 44,
                            text: "",
                            text_size: 19,
                            color: 16777215,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                let e = container_1785579500510_menu_page * 5 + 0;
                                if (e < container_1785579500510_customs.length) {
                                    container_1785579500510_selected = e;
                                    updateContainer_1785579500510_visibility(true);
                                    container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                                    container_1785579500510.setProperty(hmUI.prop.VISIBLE, true)
                                }
                            }
                        });
                    let container_1785579500510_menu_item_1 = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 144,
                            w: 330,
                            h: 44,
                            text: "",
                            text_size: 19,
                            color: 16777215,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                let e = container_1785579500510_menu_page * 5 + 1;
                                if (e < container_1785579500510_customs.length) {
                                    container_1785579500510_selected = e;
                                    updateContainer_1785579500510_visibility(true);
                                    container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                                    container_1785579500510.setProperty(hmUI.prop.VISIBLE, true)
                                }
                            }
                        });
                    let container_1785579500510_menu_item_2 = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 194,
                            w: 330,
                            h: 44,
                            text: "",
                            text_size: 19,
                            color: 16777215,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                let e = container_1785579500510_menu_page * 5 + 2;
                                if (e < container_1785579500510_customs.length) {
                                    container_1785579500510_selected = e;
                                    updateContainer_1785579500510_visibility(true);
                                    container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                                    container_1785579500510.setProperty(hmUI.prop.VISIBLE, true)
                                }
                            }
                        });
                    let container_1785579500510_menu_item_3 = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 244,
                            w: 330,
                            h: 44,
                            text: "",
                            text_size: 19,
                            color: 16777215,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                let e = container_1785579500510_menu_page * 5 + 3;
                                if (e < container_1785579500510_customs.length) {
                                    container_1785579500510_selected = e;
                                    updateContainer_1785579500510_visibility(true);
                                    container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                                    container_1785579500510.setProperty(hmUI.prop.VISIBLE, true)
                                }
                            }
                        });
                    let container_1785579500510_menu_item_4 = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 294,
                            w: 330,
                            h: 44,
                            text: "",
                            text_size: 19,
                            color: 16777215,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                let e = container_1785579500510_menu_page * 5 + 4;
                                if (e < container_1785579500510_customs.length) {
                                    container_1785579500510_selected = e;
                                    updateContainer_1785579500510_visibility(true);
                                    container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                                    container_1785579500510.setProperty(hmUI.prop.VISIBLE, true)
                                }
                            }
                        });
                    let container_1785579500510_menu_prev = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 344,
                            w: 106,
                            h: 42,
                            text: "Prev",
                            text_size: 19,
                            color: 11579568,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                if (container_1785579500510_menu_page > 0) {
                                    container_1785579500510_menu_page--;
                                    renderContainer_1785579500510_menu()
                                }
                            }
                        });
                    let container_1785579500510_menu_next = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 142,
                            y: 344,
                            w: 106,
                            h: 42,
                            text: "Next",
                            text_size: 19,
                            color: 11579568,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                if ((container_1785579500510_menu_page + 1) * 5 < container_1785579500510_customs.length) {
                                    container_1785579500510_menu_page++;
                                    renderContainer_1785579500510_menu()
                                }
                            }
                        });
                    let container_1785579500510_menu_close = container_1785579500510_menu.createWidget(hmUI.widget.BUTTON, {
                            x: 254,
                            y: 344,
                            w: 106,
                            h: 42,
                            text: "Close",
                            text_size: 19,
                            color: 16777215,
                            normal_color: 3158064,
                            press_color: 5263440,
                            radius: 6,
                            click_func: () => {
                                container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                                container_1785579500510.setProperty(hmUI.prop.VISIBLE, true)
                            }
                        });
                    function renderContainer_1785579500510_menu() {
                        for (let m = 0; m < 5; m++) {
                            let idx = container_1785579500510_menu_page * 5 + m;
                            let menuItem = eval("container_1785579500510_menu_item_" + m);
                            if (idx < container_1785579500510_customs.length) {
                                let prefix = idx == container_1785579500510_selected ? "* " : "";
                                menuItem.setProperty(hmUI.prop.TEXT, prefix + container_1785579500510_customs[idx].label.toString());
                                menuItem.setProperty(hmUI.prop.VISIBLE, true)
                            } else {
                                menuItem.setProperty(hmUI.prop.TEXT, "");
                                menuItem.setProperty(hmUI.prop.VISIBLE, false)
                            }
                        }
                    }
                    function showContainer_1785579500510_menu() {
                        container_1785579500510_menu_page = Math.floor(container_1785579500510_selected / 5);
                        renderContainer_1785579500510_menu();
                        container_1785579500510.setProperty(hmUI.prop.VISIBLE, false);
                        container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, true)
                    }
                    container_1785579500510_menu.setProperty(hmUI.prop.VISIBLE, false);
                    function updateContainer_1785579500510_visibility(showSelected = false) {
                        for (let w = 0; w < container_1785579500510_customs.length; w++) {
                            for (let z of container_1785579500510_customs[w].widgets) {
                                let widget = eval(z);
                                if (widget) {
                                    if (w == container_1785579500510_selected) {
                                        if (showSelected) {
                                            widget.setProperty(hmUI.prop.VISIBLE, true)
                                        }
                                    } else {
                                        widget.setProperty(hmUI.prop.VISIBLE, false)
                                    }
                                }
                            }
                        }
                    }
                    updateContainer_1785579500510_visibility();
                    function updateTime() {
                        normal_hour_imageset36.setProperty(hmUI.prop.MORE, {
                            src: normal_hour_imageset36_array[timeSensor.hour]
                        });
                        idle_hour_imageset53.setProperty(hmUI.prop.MORE, {
                            src: idle_hour_imageset53_array[timeSensor.hour]
                        })
                    }
                    timeSensor.addEventListener(hmSensor.event.CHANGE, function () {
                        updateTime()
                    });
                    const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                            resume_call: function () {
                                updateTime();
                                updateContainer_1785579500510_visibility();
                                timeInterval = setInterval(updateTime, 1e3)
                            },
                            pause_call: function () {
                                clearInterval(timeInterval)
                            }
                        })
                },
                onInit() {
                    console.log("index page.js on init invoke");
                    this.init_view()
                },
                onReady() {
                    console.log("index page.js on ready invoke")
                },
                onShow() {
                    console.log("index page.js on show invoke")
                },
                onHide() {
                    console.log("index page.js on hide invoke")
                },
                onDestroy() {
                    console.log("index page.js on destroy invoke")
                }
            })
    })()
} catch (e) {
    console.log(e)
}
