var MSG = {
  title: "كود",
  blocks: "البلوكات",
  linkTooltip: "احفظ ووصلة إلى البلوكات.",
  runTooltip: "شغل البرنامج المعرف بواسطة البلوكات في مساحة العمل.",
  badCode: "خطأ في البرنامج:\n %1",
  timeout: "تم تجاوز الحد الأقصى لتكرارات التنفيذ .",
  trashTooltip: "تجاهل كل البلوكات.",
  catLogic: "منطق",
  catLoops: "الحلقات",
  catMath: "رياضيات",
  catText: "نص",
  movements:"movements",
  catLists: "قوائم",
  catColour: "لون",
  catVariables: "متغيرات",
  catFunctions: "إجراءات",
  listVariable: "قائمة",
  textVariable: "نص",
  httpRequestError: "كانت هناك مشكلة مع هذا الطلب.",
  linkAlert: "مشاركة كود بلوكلي الخاص بك مع هذا الرابط:\n %1",
  hashError: "عذراً،ال '%1' لا تتوافق مع أي برنامج تم حفظه.",
  xmlError: "تعذر تحميل الملف المحفوظة الخاصة بك.  ربما تم إنشاؤه باستخدام إصدار مختلف من بلوكلي؟",
  badXml: "خطأ في توزيع ال \"XML\":\n %1\n\nحدد 'موافق' للتخلي عن التغييرات أو 'إلغاء الأمر' لمواصلة تحرير ال\"XML\".",

    /**Toolbox begin*/
    /** toolbox的开始 */
    id_start: "ابدأ",
    /** toolbox的动作 */
    id_actions: "التحركات",
    /** toolbox的运动 */
    id_moves : "التحركات",
    /** toolbox的感知 */
    id_sensors : "المستشعر",
    /** toolbox的事件 */
    id_events : "الأحداث",
    /** toolbox的数学 */
    id_math : "الرياضيات",
    /** toolbox的控制 */
    id_control : "التحكم",
    /** toolbox的展示 */
    id_show : "عرض",
    /**Toolbox end*/

    /**Start Category begin */
    id_when_start : "انقر على 'تشغيل' (تشغيل) للبدء",
    id_go_to_start : "الانتقال إلى Start (بدء)",
    /**Start Category end */

    /** Movement Category begin */
    servo_angle_popup_title :"ضبط زاوية الدوران لمحرك المعزّز",
    servo_angle_popup_close:"إغلاق",
    servo_angle_popup_variable:"المتغير",
    servo_angle_popup_angle:"الزاوية",
    servo_angle_popup_cancel :"إلغاء",
    servo_angle_popup_ok :"موافق",

    rotate_servo_popup_clockwise:"في اتجاه عقارب الساعة",
    rotate_servo_popup_anti_clockwise:"عكس اتجاه عقارب الساعة",
    rotate_servo_popup_stop:"إيقاف",
    rotate_servo_popup_title:"وضع الدوران",
    rotate_servo_popup_cancel:"إلغاء",
    rotate_servo_popup_ok:"موافق",

    servo_status_popup_title:"تعيين حالة محرك المعزز",
    servo_status_popup_cancel:"إلغاء",
    servo_status_popup_ok:"موافق",
    servo_status_popup_locking:"قفل",
    servo_status_popup_adjustable:"إلغاء قفل",
    servo_status_popup_tips:"يتعذر عليك ضبط المعزز المتوافق مع الروبوت عندما يكون في وضع القفل",

    posture_named_popup_title :"تسمية الوضعية",
    posture_named_popup_cancel :"إلغاء",
    posture_named_popup_ok :"موافق",
    posture_named_popup_placeholder :"الوضعية",
    posture_named_popup_msg :"يتضمن اسم الوضعية حروفًا غير صالحة",
    posture_named_too_long : "يجب ألا يزيد اسم الوضعية عن %1 حرفًا",

  /*运动  begin*/
    gyro_rotate_direction_popup_title :"تحديد اتجاه الدوران لمحرك المعزّز",
    gyro_rotate_direction_popup_cancel :"إلغاء",
    gyro_rotate_direction_popup_ok :"موافق",
    gyro_rotate_direction_popup_curVal :"القيمة الحالية",
    gyro_rotate_direction_popup_course :"زاوية الاتجاه",
    gyro_rotate_direction_popup_horizontal :"زاوية اللف",
    gyro_rotate_direction_popup_house :"زاوية الدوران",
  /*运动  end*/
    posture_set_desc : "فتح التبديل المناسب وتحديد عمل الروبوت",
    posture_ok_desc : "تشكل بعد إدخال اسم موقف",
    id_servo : 'مُعزِّز',
    id_rotate : 'دوران',
    id_degree : 'درجة',
    id_in : 'أثناء',
    id_millsecond : 'ملي ثانية',


    id_rotate_circle : 'دوران المعزز بمقدار 360°',
    id_servos : 'المعززات',
    id_run_to : 'تشغيل',
    id_all: 'الكل',
    id_lock : 'قفل',
    id_unlock : 'إلغاء قفل',
    servo_id : 'المعرّف',
    servo_angle : 'الزاوية',
    movement_gesture: 'الوضعية',
    servo_direction : 'الاتجاه',
    servo_speed : 'السرعة',

    /** Movement Category end */

    /**Control Category begin */
    id_control_wait_for : 'الانتظار لمدة',
    id_control_repeat : 'تكرار',
    id_control_repeat_times: 'مرات',
    id_control_wait:'انتظار',
    id_control_seconds:'ملي ثانية',
    id_math_not:'غير',
    id_while : 'بينما',
    id_until : 'حتى',
    id_repeat : 'قم',
    /**Control Category end */

  /*Event Category begin*/
    maincontrol_box :"صندوق التحكم الأساسي",
    low_power :"طاقة منخفضة",
    ir_sensor : "مستشعر IR",
    reflectance : "انعكاس",
    touch_sensor:"مستشعر اللمس",
    status : "الحالة هي",
    title_touch_sensor : "ضبط مستشعر اللمس",
    click : "النقر",
    db_click : "النقر المزدوج",
    press_hold : "الضغط مع الثبات",
    release : "تحرير",
    gyroscope : "جيروسكوب",
    angle : "الزاوية",
    axie : 'axie',
    title_device_tilt : "ضبط حالة الهاتف/Pad",
    phone_pad :"الهاتف/Pad",
    tilt_left : "الإمالة لليسار",
    tilt_right : "الإمالة لليمين",
    tilt_up : "الإمالة لأعلى",
    tilt_down : "الإمالة لأسفل",
    tilt_swing : "الإمالة باللف",
  /*Event Category end*/

    /** Show Category start */
    id_show_play_effect:'تأثيرات التشغيل',
    id_show_play_tune:'نغمة التشغيل',
    id_show_show_emoji:'عرض الرموز التعبيرية ',
    id_show_show_LEDs:'عرض مؤشرات LED',
    id_show_time_during:'لمدة',
    id_show_time_ms:'ملي ثانية',
    id_show_times:'مرات',
    sound_effects_popup_title :"تعيين تأثيرات الصوت",
    sound_effects_popup_cancel :"إلغاء",
    sound_effects_popup_ok :"موافق",
    sound_effects_recording_add :"إضافة تسجيل جديد",
    sound_effects_recording_delete :"حذف",
    title_setting_light : "إضاءة الإعداد",
    title_setting_tune : "نغمة الإعداد",
    title_setting_emotion : "الرمز التعبيري للإعداد",
    id_all_bright: "إضاءة كاملة",
    id_custom: "مخصص",
    id_smile: 'ابتسامة',
    id_cry : 'بكاء',
    id_sad : 'حزين',
    id_wink : 'غمز',
    id_dizzy : 'مصاب بدوار',
    id_daze : 'ذهول',
    id_open_eyes : 'عينان مفتوحتان',
    id_close_eyes : 'عينان مغلقتان',
    /** Show Category end */

    /**Sensor Category begin */
    id_sensor_IR_sensor: 'مستشعر IR',
    id_sensor_reflectance_between_obstacle:'reflectance_between_obstacle',
    id_sensor_touch_sensor:'مستشعر اللمس',
    id_sensor_touch_sensor_status:'الحالة',
    id_sensor_gyroscope:'جيروسكوب',
    id_sensor_angle:'الزاوية',
    y_axie:'زاوية اللف',
    x_axie:'زاوية الدوران',
    z_axie:'زاوية الاتجاه',
    servo:'المُعزِّز',
    id_sensor_set_gyroscope:'تعيين جيروسكوب',
    id_sensor_angle_to_zero:'تحديد الزاوية على 0',
    /**Sensor Category end */

    /**Math Category begin */
    id_math_variables_set_add : "%1 + %2",
    id_set : "تعيين",
    id_to : "إلى",
    /**Math Category end */

   /* Common section begin */
    btn_name_confirm : "موافق",
    btn_name_cancel: "إلغاء",
    /* Common section end*/


    id_start_info : 'تشغيل',
    id_stop_info : 'إيقاف',

    title_infrared_sensor : "ضبط مستشعر الأشعة تحت الحمراء",
    current_value : 'القيمة الحالية',
    distance_1: 'شديد القرب',
    distance_2:'قريب',
    distance_3:'متوسط',
    distance_4:'بعيد',
    distance_5:'شديد البعد',

    /* need to be removed, wait to confirm */
    distance_very_near: 'شديد القرب',
    distance_near:'قريب',
    distance_middle:'متوسط',
    distance_far:'بعيد',
    distance_very_far:'شديد البعد',

    title_bluetooth_connect : "توصيل Bluetooth",
    title_time_adjust : "ضبط الوقت",

    index_back:"رجوع",
    disconnected : "قطع الاتصال",
    /*项目  begin*/
    //保存项目
    input_rule_msg : ".يتعذر إدخال الأحرف الخاصة. يمكن إدخال %1 من الأحرف أو %2 من الأحرف الصينية كحد أقصى",
    variable_inputrule_msg : ".يتعذر البدء برقم. يتعذر إدخال الأحرف الخاصة. يمكن إدخال %1 من الأحرف أو %2 من الأحرف الصينية كحد أقصى",
    add_project_placeholder : "مشروع جديد",
    project_pop_ok_btn: "موافق",
    project_pop_cancel_btn: "إلغاء",
    add_project_pop_title : "اسم المشروع",
    add_project_input_check : "يمكن إدخال 16 حرفًا فقط",
    project_name_too_long : "يجب ألا يزيد اسم المشروع عن %1 من الحروف ",
    project_name_popup_msg : "يتضمن اسم المشروع حروفًا غير صالحة",
    //是否保存项目
    is_add_project_pop_title :"حفظ المشروع",
    is_add_project_pop_tips :"هل تريد حفظ المشروع الحالي؟",
    //项目列表
    project_list_title :"مشروعاتي",
    porject_alert_title:"خطأ",
    porject_alert_tips:"نصائح",
    porject_alert_content:"عذرًا، معلمة خاطئة لتشغيل الهدف. برجاء التحقق!",
    porject_alert_content_01:"اسم العنصر موجود بالفعل. برجاء الإدخال مرة أخرى.",
    porject_alert_content_02:"خطأ في تشغيل خدمة القاعدة. رسالة الخطأ هي:",
    porject_alert_content_03:"خطأ في البيانات المستلمة من القاعدة!",
    porject_alert_content_04:"فشلت قراءة المشروع ",
    porject_alert_content_05:"عذرًا، كتلة البرنامج في ملف المشروع تحتوي على أخطاء!",
    porject_alert_content_06:"تم حفظ المشروع",
    porject_alert_btnText:"موافق",
    /*项目  end*/
  /*设置音效弹出框音效文件国际化  begin*/
    add_recording_ok:"موافق",
    recording_tips:"تسجيل",
    id_control_break : 'خارج الدورة',
    id_blue_disconnect : 'Bluetooth غير متصل',
    id_ok : 'موافق',
    recording_title:"تسجيل",
    recording_cancel:"إلغاء",
    recording_ok:"موافق",
    recording_placeholder:"برجاء إدخال اسم تسجيل",
    recording_popup_title:"إدخال اسم الملف المُسجّل",
	recording_name_popup_msg : "اسم تسجيل يحتوي على أحرف غير صالحة",
    animal:"حيوان",
    machine:"آلة",
    recording:"تسجيل",
    bear:"دب",
    bird:"طائر",
    chicken:"دجاجة",
    cow:"بقرة",
    dog:"كلب",
    elephant:"فيل",
    giraffe:"زرافة",
    horse:"حصان",
    lion:"أسد",
    monkey:"قرد",
    pig:"خنزير",
    rhinoceros:"وحيد القرن",
    sealions:"أسد البحر",
    tiger:"نمر",
    walrus:"فظ البحر",
    ambulance:"إسعاف",
    busy_tone:"busy_tone",
    carhorn:"carhorn",
    carhorn1:"carhorn1",
    doorbell:"doorbell",
    engine:"engine",
    laser:"laser",
    meebot:"meebot",
    police_car_1:"police_car_1",
    police_car_2:"police_car_2",
    ringtones:"نغمات الرنين",
    robot:"روبوت",
    telephone_call:"telephone_call",
    touch_tone:"touch_tone",
    wave:"موجة",
   /*设置音效弹出框音效文件国际化  end*/


    variable_named_popup_placeholder :"المتغير",
    title_variable_set : 'تعيين المتغير',
    variable_named_popup_msg :"يتضمن اسم المتغير حروفًا غير صالحة",
    variable_named_too_long : "يجب ألا يزيد اسم المتغير عن %1 من الحروف",
    speed:"السرعة",
    speed_VS:"شديدة البطء",
    speed_S:"بطيئة",
    speed_M:"متوسطة",
    speed_V:"سريعة",
    speed_VF:"شديدة السرعة",
    speed_no_value:"توجيه الجهاز الحالي بدون عجلات",
    speed_only_360_value:"يتميز الجهاز الحالي بعدم وجود توجيه بمقدار 360 بدون عجلات",
    lights_tips:"غير متصل النموذج الحالي إلى أي ضوء",
    exit_tips:"لم يتم حفظ البرنامج الحالي، هل تريد الاستمرار أم الخروج؟",
    project_has_no_change:"لم يتم تغيير البرنامج الحالي",
    close_blue:"Bluetooth غير متصل، فهل الاتصال مقطوع؟",
    posture_link:"النموذج غير متصل. برجاء توصيل النموذج أولاً",
    posture_link_popup_title:"توصيل النموذج",
    posture_link_popup_cancel:"إلغاء",
    posture_link_popup_ok:"موافق",
    recording_name_repeat:"تكرار الاسم المسجَّل",
    recording_named_too_long : "الاسم طويل جدًا، برجاء الإدخال مرة أخرى",
    recording_alert_title:"خطأ",
    recording_alert_content:"فشل منح الامتياز",
    recording_alert_ok:"موافق",
    help_title:"التعريف بالكتلة",
    newProjectName:"مشروع جديد",
    sysVoiceName:"الصوت",
    exit_popup_cancel:"إلغاء",
    exit_popup_ok:"موافق",
    exit_popup_title:"نصائح",
    recording_data_tips:"النظام الحالي لا يوجد به ملفات تسجيل مخصصة",
    infrared_tips:"لم يتم توصيل جهاز استشعار الأشعة تحت الحمراء للنموذج الحالي",
    touch_tips:"لم يتم توصيل جهاز استشعار تعمل باللمس إلى النموذج الحالي",
    gyroscope_tips:"لم يتم توصيل جهاز استشعار الدوران إلى النموذج الحالي",

    id_infinite_loop_error:'خروج البرنامج بسبب من الذاكرة، يرجى العودة إلى الوراء وإعادة المحاولة',
    // 新手指引
    save_project_msg:"!انقر هنا لحفظ البرنامج",
    projectlist_msg:"!يمكنك عرض البرامج فقد تعلَّم Jimu البرامج الجديدة وأتقنها ويمكنه إنشاؤها لتنفيذ المهمة",
    swift_msg:"!انقر هنا لعرض كود التحويل الإلكتروني",
    help_msg:"!انقر هنا إذا كان لديك أسئلة",
    run_msg:"!اسمح لـ Jimu للتحرك وفق البرمجة التي أجريتها به",
    go_skip:"تخطي",
    servo_mode_error : 'خطأ في وضع المُعزِّز',
    set_servo_mode : 'الإعدادات',
    id_show_scenelight:'إظهار عرض الأضواء',
    title_setting_scenelight : "إعداد عرض الأضواء",
    id_happy:"سعيد",
    id_jingya:"مندهش",    
    id_relei:"دموع",
    id_leiguang:"دموع وامضة",
    id_shangxin:"حزين",
    id_yun:"مصاب بدوار",
    id_fadai:"مذهول",
    id_zhayan:"وميض العين",
    id_haixiu:"خجول",
    id_shanshuo:"وميض",
    id_huxi:"تنفس",
    id_fengshan:"مروحة",
    id_yugua:"ماسحات",

    id_deng:"7 أضواء ملونة",
    id_disco:"Disco",
    id_caise:"تداخل الألوان",
    id_sanyuanse:"الألوان الرئيسية",
    select_all:"الكل",
    no_common_servo_info : "لا يوجد معزِّز وضع الزاوية حاليًا (يمكن التدوير ضمن نطاق معين). هل تحتاج إلى إعداد واحد؟",
    no_circle_servo_info : "لا يوجد معزِّز وضع العجلة حاليًا (يمكن التدوير حتى 360 درجة). هل تحتاج إلى إعداد واحد؟",
    touch_tips_error : 'رقم المنع الحالي غير صحيح، الرجاء حذفها وإعادة',

	shumaguan:"Digital Tube",
    show_time:"Show time",
    show_number:"Show number",
    show_count:"Show timer",
    stop_count:"Stop timer",
    show_countdown:"Show countdown",
    set_countdown:"Countdown setting",
    let_show_number:"Show number with nixie tube",
    let_show_time:"Show time with nixie tube",
    let_show_count:"Show timer with nixie tube",
    let_stop_count:"Stop timer with nixie tube",
    let_show_countdown:"Show countdown with nixie tube",
    let_led_scenelight:"Show scene lighting with LED lights",
    long_lighton:"Always on",
    no_project_tip:"لا يوجد مشروع، انقر على + في الركن العلوي الأيمن لإنشاء واحد!"
};
