javascript: setTimeout(function() {
	function sd() {
		$.post(tmp.url,tmp.data, function(msg) {
			if(tmp&&msg){
				Thread_add_result.resultNo = msg.no;
				msg.no+="";
				tmp.err['all'][0]++;
				if(tmp.err[msg.no]){tmp.err[msg.no][0]++;}else{tmp.err[msg.no]=[];tmp.err[msg.no][0]=1;tmp.err[msg.no][1]='<font color="red">'+Thread_add_result.getMessage()+'</font>';};
				msg.msg=(msg.no == "0"?'<font color="green">发帖成功！':('<font color="red">发贴失败！——错误编号：' + msg.no ))+'</font>'+(tmp.xc < 2?('<p '+(tmp.pid==0?'class="j_d_post_content"':'class="lzl_content_main"')+'>回馈内容为：'+(msg.data?msg.data.content:"")+'</p>'):'')+'<br>任务数：' + tmp.cs + '<br>成功数：' + tmp.err['0'][0] + '<br>总次数：' + tmp.err['all'][0]+'<br><table style="width: 100%;"><tbody><tr style="background:#AFA;"><td style="width: 14%;">编号</td><td style="width: 16%;">次数</td><td style="">原因</td></tr>';
				for(var a in tmp.err) msg.msg+='<tr><td>'+a+'</td><td>'+tmp.err[a][0]+'</td><td>'+tmp.err[a][1]+'</td></tr>';			
				msg.msg+='</tbody></table>';
				if (msg.no == "0"&&tmp.err['0'][0] == tmp.cs) {
					G("result_show").innerHTML='<font color="green">任务完成！'+(tmp.xc > 1?'等待其他线程结束':'')+'</font><br>'+msg.msg;
				} else if (msg.no == "40"&&tmp.cs == 1) {
					tmp.err['all'][0]--;
					if(msg.data.vcode.captcha_code_type==4){
						msg.msg='<div id="Tool_yyzzmm"><style>#Tool_yyzzmm{background: url(/cgi-bin/genimg?'+msg.data.vcode.captcha_vcode_str+'&tag=pc&t=0.9104765392839909) no-repeat; width: 190px;display: inline-block;-webkit-user-select: none;cursor: pointer;}#Tool_yyzzmm div{display: inline-block;margin: 2px;height: 40px;width: 46px;}#Tool_yyzzmm div:hover{margin: 0px;border: 2px dotted;background: rgba(0, 255,0, 0.2);}</style><p style="height: 36px;"></p><div class="00000000"></div><div class="00010000"></div><div class="00020000"></div><div class="00000001"></div><div class="00010001"></div><div class="00020001"></div><div class="00000002"></div><div class="00010002"></div><div class="00020002"></div></div><div style="display: inline-block;width: 145px;vertical-align: top;">'+msg.data.vcode.str_reason+'<br><textarea style="width:146px;height: 132px;resize: none;" class="Tool_yzm"></textarea><br><input type="button" value="确定" style="width: 132px;" class="Tool_sd"></div>';
					}else{
						msg.msg='<div>'+msg.data.vcode.str_reason+'<br><img src="/cgi-bin/genimg?'+msg.data.vcode.captcha_vcode_str+'&t=0.05767942941747606"><div style="display: inline-block;"><input type="text" style="width:144px;" class="Tool_yzm"><br><input type="button" value="确定" style="width: 132px;" class="Tool_sd"></div></div>';
					}
					tmp.vcode=msg.data.vcode.captcha_vcode_str;
					G("result_show").innerHTML=msg.msg;
					$("#Tool_yyzzmm div").on("click",function(){
						G("Tool_yzm").value+=""+this.className+"\n";
					});
					G("Tool_sd").onclick=function(){
						tmp.scode=G("Tool_yzm").value.replace(/\n/g,'');
						if(tmp.scode&&(tmp.scode.length==4||tmp.scode.length==32)){
							tmp.data = getdata();
							sd();
						}
					};
				} else if(tmp.err['0'][0] == tmp.cs){;
				} else {
					G("result_show").innerHTML = (msg.msg);
					tmp.jg > 0 ? setTimeout(function() {
						sd()
					}, tmp.jg * 1000) : sd()
				}
			}
		}, "JSON")
	};
	function getdata() {return ('kw=' + f.name_url + '&fid=' + f.forum_id + '&quote_id=' + tmp.pid + '&tid=' + tmp.tid + '&rich_text=1&tbs=' + p.tbs + '&content=' + encodeURIComponent(tmp.co) + '&rich_text=1&title=' + encodeURIComponent(tmp.ti) + '&__type__=reply'+(tmp.scode? ("&vcode=" + encodeURIComponent(tmp.scode) + "&vcode_md5=" + tmp.vcode) : ""));};
	function F(s) {return s.replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/&amp;\u20ac/g,'&€');};
	function G(s) {a=tmp.e.getElementsByClassName(s)[0];return a?a:{};};
	function R(s) {return s[0]?s[Math.floor(Math.random() * s.length*100)%s.length]:"";};
	function A2W(s) {
		var r = "",e = "&€#",
			F = function(s, i) {
				for (s = s.split(r), i = 0; i < s.length; i++) s[i] = (e + s[i].charCodeAt(0) + ";");
				return s.join(r)
			},
			M = function(s, i) {
				for (s = s.replace(/€/g, r).split(r), i = 0; i < s.length; i++) s[i] = (e + (s[i].charCodeAt(0) + 0x20000) + ";");
				return s.join(r)
			},
			H = function(s, i, a) {
				for (s = s.split(r), i = 0; i < s.length; i++) {
					a = s[i].charCodeAt(0);
					s[i] = "%u" + ((a & 64512) / 1024 + 55296).toString(16) + "%u" + ((a & 1023) | 56320).toString(16)
				}
				return unescape(s.join(r))
			},
			t = s.match(/\[emotion.+?\[\/emotion\]/g),
			n = "",
			f = 0,
			m = 0,
			h = 0,
			z = 0,
			b = 0,
			d = 0,
			i = 0;
		for (; t && i < t.length; i++) if (!t[i].match(/http:\/\/tb2.bdstatic.com/g)) {
			s = s.replace(t[i], t[i].replace(/emotion/g, "img"))
		};
		t = "";
		s = (s + " 》】』");
		for (i = 0; i < s.length; i++) {
			switch (s.charCodeAt(i)) {
			case 91:
				b = 1;
				t += s.charAt(i);
				break;
			case 93:
				b = 0;
				t += s.charAt(i);
				break;
			case 20022:
				if (z || b) {
					t += "丶"
				} else {
					t += s.charAt(i + 1);
					i++
				};
				break;
			case 12310:
				if (z || b) {
					t += "〖"
				} else {
					if (!d) {
						t += e + "8238;";
						d = 1
					}
				};
				break;
			case 12311:
				if (z || b) {
					t += "〗"
				} else {
					if (d) {
						t += e + "8236;";
						d = 0
					}
				};
				break;
			case 64:
				if (b) {
					t += "@"
				} else {
					if (z) {
						t += " @"
					} else {
						z = 1;
						t += "@"
					}
				};
				break;
			case 32:
				if (z && !b) z = 0;
				t += " ";
				break;
			case 12298:
				if (z || b) {
					t += "《"
				} else {
					f = 1
				};
				break;
			case 12299:
				if (z || b) {
					t += "》"
				} else {
					f = 0
				};
				break;
			case 12302:
				if (z || b) {
					t += "『"
				} else {
					m = 1
				};
				break;
			case 12303:
				if (z || b) {
					t += "』"
				} else {
					m = 0
				};
				break;
			case 12304:
				if (z || b) {
					t += "【"
				} else {
					h = 1
				}
				break;
			case 12305:
				if (z || b) {
					t += "】"
				} else {
					h = 0
				};
				break;
			default:
				if (z || b) {
					t += s.charAt(i)
				} else {
					n = s.charAt(i);
					if (f) n = F(n);
					if (m) n = M(n);
					if (h) n = H(n);
					t += n
				}
			}
		};
		return t.replace(/\[用户\]/g, p.user.name_show.replace(/丶/g,"丶丶"));
	}
	function bc() {
		tmp.err = {"all":[0,'<font color="blue">总次数</font>'],"0":[0,'<font color="green">发送成功</font>']};
		tmp.ms = G("Tool_ms").value.split('*');
		tmp.xc = tmp.ms[0];
		tmp.cs = tmp.ms[1];
		tmp.jg = tmp.ms[2];
		tmp.ti = t ? t.title : G("Tool_ti").value;
		tmp.tid = t ? t.thread_id : 0;
		tmp.pid = l ? G("Tool_pid").value : 0;
		tmp.wb = G("Tool_wb").value=='随机' ?R(tmp.xwb):G("Tool_wb").value;
		tmp.zt = G("Tool_zt").checked ?1:0;
		tmp.co = G("Tool_co").value.replace(/\n|\r/g,"[br]");
		if (tmp.co && (tmp.ti || tmp.tid) && tmp.xc && tmp.cs && tmp.jg) {
			tmp.co = F(A2W((tmp.zt==0?tmp.co:("[bold][red]"+tmp.co+"[/red][/bold]"))+tmp.wb));
			tmp.data = getdata();
			tmp.url = 'http://tieba.baidu.com/f/commit/' + (t ? 'post' : 'thread') + '/add';
			for (var i = 0; i < tmp.xc; i++) sd()
		} else {
			alert("输入错误，请重新输入！")
		}
	};
	var tmp = {xwb:['[br][br][br]\u3000\u3000\u3000————我每天都表白，因为这样一定会有瞎了眼的妹子看上我的[emotion pic_type=1 width=80 height=80]http://tb2.bdstatic.com/tb/editor/images/ali/ali_022.gif?t=20140803[/emotion]','[br][br][br]\u3000\u3000\u3000————该发言来自一位不愿透露艾迪的@[用户] 先生[emotion pic_type=1 width=30 height=30]http://tb2.bdstatic.com/tb/editor/images/face/i_f25.png?t=20140803[/emotion]','']},
		l = window.LzlEditor && LzlEditor._s_p && LzlEditor._s_p.option && LzlEditor._s_p.option.data,
		p = PageData,
		f = p.forum,
		t = p.thread,
		i=0;
	tmp.e='<style type="text/css">.result_show td {border: 1px dotted #000;padding: 1px;}input.Tool_ti:focus,textarea.Tool_co:focus {border-color: #5c9dff;box-shadow: 0 1px 6px #5c9dff;}textarea.Tool_co {height: 160px;resize: none;word-break: break-all;}.result_show input,.result_show textarea{width: 318px;padding: 2px;margin: 2px 6px;border-radius: 5px;border-width: 1px;}</style><div class="result_show">' + (t ? '' : '标题：<input type="text" class="Tool_ti" style="width: 282px;"><br>') + '回复：<select class="Tool_pid" style="color:red;">' + (l ? ((l.spid? ('<option value="' + l.spid + '">【' + l.floor_num + '】楼隐藏楼中楼</option>') : '') + '<option value="' + l.pid + '" selected="selected">回复【' + l.floor_num + '】楼</option>') : '') + '<option value="0">' + (t ? '回复【楼主】' : '【发帖】') + '</option></select> 尾巴:<select class="Tool_wb" style="color: green;width: 96px;"><option value="随机">随机小尾巴</option>';
	for(i=0;tmp.xwb[0]&&i<tmp.xwb.length;i++) tmp.e+=('<option value="'+F(tmp.xwb[i])+'">'+F(tmp.xwb[i])+'</option>');
	tmp.e+='</select><label style="display: inline-block;"><input type="checkbox" class="Tool_zt" checked="checked" style="width: auto;vertical-align: text-top;"><span>紅粗</span></label><br><textarea class="Tool_co"></textarea><br><select class="Tool_ms" style="color: green;"><option value="200*999*0">高线程模式：线程200，成功数：999，间隔0秒</option><option value="1*999999*60">盖楼模式：线程1，成功数999999，间隔60秒</option><option value="1*1*999999" selected="selected">正常模式：线程1，成功数1，间隔999999秒</option></select><input type="button" style="width: 38px;" class="Tool_qd Tool-button" value="开始"><div>';
	tmp.e = $.dialog.open(tmp.e, {
		title: "快捷发帖框",
		showTitle: !0,
		resizeable: !0,
		width: 360,
		time: 10086,
		button: !1,
		modal: !1
	}).element[0];
	G("dialogJclose").onclick = function() {
		tmp = null
	};
	G("Tool_ti").value = window.test_poster&&test_poster.$title?test_poster.$title.val():"";
	G("Tool_co").value = A2W((l&&l.pid?(LzlEditor._s_p._se&&LzlEditor._s_p._se.getContent?LzlEditor._s_p._getUbbContent():(l.user_name?('回复 '+l.user_name.replace(/丶/g,"丶丶")+' :'):'')):(window.test_editor&&test_editor.getContentUbb?test_editor.getContentUbb():'')).replace(/\[br\]/g,"\n")).replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, "\"").replace(/&gt;/g, ">").replace(/&lt;/g, "<");
	G("Tool_co").focus();G("Tool_co").select();
	G("Tool_qd").onclick = bc
}, 100);
void 0;
