function getSelectedText() 
    {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';
    }
    
    function getsentences(text)
	{	
		text=text.replace("\n",".");
  		var tokens=text.split(".");
		return tokens;
	}
	
    function findCountArray(sentence)
    {//alert(sentence);
    	 var stopWords = ["i","me","my","myself","we","our","ours","ourselves","you","your","yours","yourself","yourselves","he","him","his","himself","she","her","hers","herself","it","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","should","now","d","ll","m","o","re","ve","y","ain","aren","couldn","didn","doesn","hadn","hasn","haven","isn","ma","mightn","mustn","needn","shan","shouldn","wasn","weren","won","wouldn"];
         sentence = sentence.replace(new RegExp('\\b('+stopWords.join('|')+')\\b', 'g'), '');
         sentence=sentence.replace("  "," ");
         words_temp=[];
		 words=[];
         words_temp=sentence.split(" ");
		 j1=0;
		for(i1=0;i1<words_temp.length;i1++)
		{
			if(words_temp[i1]!='')
			{
				words[j1]=words_temp[i1].toLowerCase();
					j1+=1;
			}
		}	
      
         return words.sort();
    }
    
    function sentence_intersection(string1,string2)
    {
    	//findCountArray(string1);
        words_array1=findCountArray(string1);
		words_array2=findCountArray(string2);
        //alert(words_array1);
		i2=0;
		j2=0;
		count=0;
		while(i2<words_array1.length && j2<words_array2.length)
		{
			temp=words_array1[i2].localeCompare(words_array2[j2]);
       	//	 alert(words_array1[i]+" "+temp+" "+words_array2[j]);
        	if(temp==0){
            	count+=1;
                i2+=1;
                j2+=1;
                }
            else if(temp==1)
            {
            	j2+=1;
            }
            else
            {
            	i2+=1;
            }
		}
     //    alert(count/(words_array1.length+words_array2.length));
		return count/(words_array1.length+words_array2.length);
    }
    function getrelationshipMatrix(content)
    {		
          all_sentences=getsentences(content);
          //alert(all_sentences);
          var length=all_sentences.length;
         // alert(length);
          var dict = [];
          
          for(i=0;i<length;i++)
          {
          	dict[i]=[];
          	for(j=0;j<length;j++)
            {
            	dict[i][j]=0;
            }
          }
		//  alert(dict);
        //  findCountArray(all_sentences[0]);
         // sentence_intersection(all_sentences[0],all_sentences[1])
          for(i=0;i<length;i++)
          {
          	for(j=0;j<length;j++)
            { //lert(i+""+j);
            	dict[i][j]=sentence_intersection(all_sentences[i],all_sentences[j]);
            }
          }
          //alert(dict);
		  
		  sentence_dict={};
		  
		  for(i=0;i<length;i++)
          {	final_score=0;
          	for(j=0;j<length;j++)
            { //lert(i+""+j);
            	if(i==j || isNaN(dict[i][j]))
					continue;
				final_score+=dict[i][j];	
            }
			sentence_dict[all_sentences[i]]=final_score;
          }
		  //alert(sentence_dict);
		  return sentence_dict;
	}
	
	function get_best_sentence(para,relation_dict)
	{
		sentenceFromPara=getsentences(para);
		
		if(sentenceFromPara.length<2)
			return "";
			
		best_sentence = "";
        max_value = 0;
		bestTillNow=sentenceFromPara[0];
		for(i4=1;i4<sentenceFromPara.length;i4++)
			{
				if(relation_dict[sentenceFromPara[i4]]>max_value)
					{	
						max_value = relation_dict[sentenceFromPara[i4]];
						best_sentence = sentenceFromPara[i4];
						
					}				
			}
		return  bestTillNow+best_sentence;
	}
	
	function getSummary(contents,relationship_dicts)
	{
		paragraph=contents.split("\n\n");
		
		summary='';
		
		for(i3=0;i3<paragraph.length;i3++)
		{
			final_sentences=get_best_sentence(paragraph[i3],relationship_dicts)
			summary+=final_sentences+'\n\n';
		}
		return summary;
	}
	
	
    window.oncontextmenu = function ()
    {
      var content=getSelectedText();
//Solved by NAval Bihani ,error:no content alert box removed	 
	 if(content){
      relationship_dict=getrelationshipMatrix(content);
	  
	  final_summary=getSummary(content,relationship_dict);
	  alert(final_summary);
	}
	}