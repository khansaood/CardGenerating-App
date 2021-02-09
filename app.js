function gene() {
    var NM = document.getElementById('sName');
    var name = NM.value;

    var FNM = document.getElementById('fName');
    var F_NM = FNM.value;

    var AG = document.getElementById('age');
    var ST_AG = AG.value;

    var RN = document.getElementById('rolNo');
    var ROL_NO = RN.value;

    var STD_CLASS = document.getElementById('class');
    var S_Class = STD_CLASS.value;

    if (name == '' || F_NM == '' || ST_AG == '' || ROL_NO == '' || S_Class == '') {
        alert('fill the input to get result')
    } else {
        var mainportion = document.getElementById('portiontwo')

        //main div
        var maindiv = document.createElement('div')
        maindiv.setAttribute('class', 'maindiv')
        mainportion.appendChild(maindiv)


        //h1
        var mainh1 = document.createElement('h1')
        mainh1.setAttribute('class', 'mainh1')
        var h1text = document.createTextNode('Jawan Pakistan')
        mainh1.appendChild(h1text)
        maindiv.appendChild(mainh1)

        //h6
        var mainh6 = document.createElement('h6')
        mainh6.setAttribute('class', 'mainh6')
        var h6text = document.createTextNode('Web & App Development Program')
        mainh6.appendChild(h6text)
        maindiv.appendChild(mainh6)


        //sdiv
        var sdiv = document.createElement('div')
        sdiv.setAttribute('class', 'sdiv')
        maindiv.appendChild(sdiv)


        //adiv
        var adiv = document.createElement('div')
        adiv.setAttribute('class', 'adiv')
        sdiv.appendChild(adiv)


        //bdiv
        var bdiv = document.createElement('div')
        bdiv.setAttribute('class', 'bdiv')
        sdiv.appendChild(bdiv)


        //data.adiv
        var Student_Name = document.createElement('h6')
        var Student_Name_Text = document.createTextNode('Student Name :')
        Student_Name.appendChild(Student_Name_Text)
        adiv.appendChild(Student_Name)


        var Student_Father_Name = document.createElement('h6')
        var Student_Father_Name_Text = document.createTextNode('Father Name :')
        Student_Father_Name.appendChild(Student_Father_Name_Text)
        adiv.appendChild(Student_Father_Name)

        var Student_Age = document.createElement('h6')
        var Student_Age_Text = document.createTextNode('Age :')
        Student_Age.appendChild(Student_Age_Text)
        adiv.appendChild(Student_Age)

        var Student_Rollno = document.createElement('h6')
        var student_Rollno_Text = document.createTextNode('Roll No. :')
        Student_Rollno.appendChild(student_Rollno_Text)
        adiv.appendChild(Student_Rollno)


        var Student_Class = document.createElement('h6')
        var Student_Class_Text = document.createTextNode('Section :')
        Student_Class.appendChild(Student_Class_Text)
        adiv.appendChild(Student_Class)


        //data b div

        //Sname
        // var NM = document.getElementById('sName');
        // var name = NM.value;
        var S_NM = document.createTextNode(name)
        var InpName = document.createElement('h6')
        InpName.appendChild(S_NM)
        bdiv.appendChild(InpName)
        NM.value = ''

        //fname
        // var FNM = document.getElementById('fName');
        // var F_NM = FNM.value;
        var FATHER_NM = document.createTextNode(F_NM)
        var Inp_Fname = document.createElement('h6')
        Inp_Fname.appendChild(FATHER_NM)
        bdiv.appendChild(Inp_Fname)
        FNM.value = ''



        //age
        // var AG = document.getElementById('age');
        // var ST_AG = AG.value;
        var STD_Age = document.createTextNode(ST_AG)
        var Inp_Age = document.createElement('h6')
        Inp_Age.appendChild(STD_Age)
        bdiv.appendChild(Inp_Age)
        AG.value = ''



        //rollno
        // var RN = document.getElementById('rolNo');
        // var ROL_NO = RN.value;
        var rollno = document.createTextNode(ROL_NO)
        var Inp_rollno = document.createElement('h6')
        Inp_rollno.appendChild(rollno)
        bdiv.appendChild(Inp_rollno)
        RN.value = ''




        //clas
        // var STD_CLASS = document.getElementById('class');
        // var S_Class = STD_CLASS.value;
        var clas = document.createTextNode(S_Class)
        var Inp_Class = document.createElement('h6')
        Inp_Class.appendChild(clas)
        bdiv.appendChild(Inp_Class)
        STD_CLASS.value = ''




        //Picture_div
        var para = document.createElement('h4')
        para.setAttribute('class', 'pictext')
        var para_text = document.createTextNode('Picture Here')
        para.appendChild(para_text)
        var pic = document.createElement('div')
        pic.setAttribute('class', 'picture')
        pic.appendChild(para)
        sdiv.appendChild(pic)




        //footer
        var fotter = document.createElement('div')
        fotter.setAttribute('class', 'foot')
        var footer_text = document.createTextNode('@All Right Reserved to  (kamyabjawan.gov.pk)')
        fotter.appendChild(footer_text)
        maindiv.appendChild(fotter)






    }
}