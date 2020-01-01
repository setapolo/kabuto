 function printWithRunin(h, s, type)
{
  var div = println(s, type);
  var head = document.createElement("strong");
  head.appendChild(document.createTextNode(h + ": "));
  div.insertBefore(head, div.firstChild);

}
function tabcomplete()
{
  /*
   * Working backwards from s[from], find the spot
   * where this expression starts.  It will scan
   * until it hits a mismatched ( or a space,
   * but it skips over quoted strings.
   * If stopAtDot is true, stop at a '.'
   */
  function findbeginning(s, from, stopAtDot)
  {
    /*
     *  Complicated function.
     *
     *  Return true if s[i] == q BUT ONLY IF
     *  s[i-1] is not a backslash.
     */
    function equalButNotEscaped(s,i,q)
    {
      if(s.charAt(i) != q) // not equal go no further
        return false;

      if(i==0) // beginning of string
        return true;

      if(s.charAt(i-1) == '\\') // escaped?
        return false;

      return true;
    }

    var nparens = 0;
    var i;
    for(i=from; i>=0; i--)
    {
      if(s.charAt(i) == ' ')
        break;

      if(stopAtDot && s.charAt(i) == '.')
        break;

      if(s.charAt(i) == ')')
        nparens++;
      else if(s.charAt(i) == '(')
        nparens--;

      if(nparens < 0)
        break;

      // skip quoted strings
      if(s.charAt(i) == '\'' || s.charAt(i) == '\"')
      {
        //dump("skipping quoted chars: ");
        var quot = s.charAt(i);
        i--;
        while(i >= 0 && !equalButNotEscaped(s,i,quot)) {
          //dump(s.charAt(i));
          i--;
        }
        //dump("\n");
      }
    }
    return i;
  }

  // XXX should be used more consistently (instead of using selectionStart/selectionEnd throughout code)
  // XXX doesn't work in IE, even though it contains IE-specific code
  function getcaretpos(inp)
  {
    if(inp.selectionEnd != null)
      return inp.selectionEnd;

    if(inp.createTextRange)
    {
      var docrange = _win.Shell.document.selection.createRange();
      var inprange = inp.createTextRange();
      if (inprange.setEndPoint)
      {
        inprange.setEndPoint('EndToStart', docrange);
        return inprange.text.length;
      }
    }

    return inp.value.length; // sucks, punt
  }

  function setselectionto(inp,pos)
  {
    if(inp.selectionStart) {
      inp.selectionStart = inp.selectionEnd = pos;
    }
    else if(inp.createTextRange) {
      var docrange = _win.Shell.document.selection.createRange();
      var inprange = inp.createTextRange();
      inprange.move('character',pos);
      inprange.select();
    }
    else { // err...
    /*
      inp.select();
      if(_win.Shell.document.getSelection())
        _win.Shell.document.getSelection() = "";
        */
    }
  }
    // get position of cursor within the input box
    var caret = getcaretpos(_in);

    if(caret) {
      //dump("----\n");
      var dotpos, spacepos, complete, obj;
      //dump("caret pos: " + caret + "\n");
      // see if there's a dot before here
      dotpos = findbeginning(_in.value, caret-1, true);
      //dump("dot pos: " + dotpos + "\n");
      if(dotpos == -1 || _in.value.charAt(dotpos) != '.') {
        dotpos = caret;
//dump("changed dot pos: " + dotpos + "\n");
      }

      // look backwards for a non-variable-name character
      spacepos = findbeginning(_in.value, dotpos-1, false);
      //dump("space pos: " + spacepos + "\n");
      // get the object we're trying to complete on
      if(spacepos == dotpos || spacepos+1 == dotpos || dotpos == caret)
      {
        // try completing function args
        if(_in.value.charAt(dotpos) == '(' ||
 (_in.value.charAt(spacepos) == '(' && (spacepos+1) == dotpos))
        {
          var fn,fname;
  var from = (_in.value.charAt(dotpos) == '(') ? dotpos : spacepos;
          spacepos = findbeginning(_in.value, from-1, false);

          fname = _in.value.substr(spacepos+1,from-(spacepos+1));
  //dump("fname: " + fname + "\n");
          try {
            with(_win.Shell._scope)
              with(_win)
                with(Shell.shellCommands)
                  fn = eval(fname);
          }
          catch(er) {
            //dump('fn is not a valid object\n');
            return;
          }
          if(fn == undefined) {
             //dump('fn is undefined');
             return;
          }
          if(fn instanceof Function)
          {
            // Print function definition, including argument names, but not function body
            if(!fn.toString().match(/function .+?\(\) +\{\n +\[native code\]\n\}/))
              println(fn.toString().match(/function .+?\(.*?\)/), "tabcomplete");
          }

          return;
        }
        else
          obj = _win;
      }
      else
      {
        var objname = _in.value.substr(spacepos+1,dotpos-(spacepos+1));
        //dump("objname: |" + objname + "|\n");
        try {
          with(_win.Shell._scope)
            with(_win)
                obj = eval(objname);
        }
        catch(er) {
          printError(er);
          return;
        }
        if(obj == undefined) {
          // sometimes this is tabcomplete's fault, so don't print it :(
          // e.g. completing from "print(document.getElements"
          // println("Can't complete from null or undefined expression " + objname, "error");
          return;
        }
      }
      //dump("obj: " + obj + "\n");
      // get the thing we're trying to complete
      if(dotpos == caret)
      {
        if(spacepos+1 == dotpos || spacepos == dotpos)
        {
          // nothing to complete
          //dump("nothing to complete\n");
          return;
        }

        complete = _in.value.substr(spacepos+1,dotpos-(spacepos+1));
      }
      else {
        complete = _in.value.substr(dotpos+1,caret-(dotpos+1));
      }
      //dump("complete: " + complete + "\n");
      // ok, now look at all the props/methods of this obj
      // and find ones starting with 'complete'
      var matches = [];
      var bestmatch = null;
      for(var a in obj)
      {
        //a = a.toString();
        //XXX: making it lowercase could help some cases,
        // but screws up my general logic.
        if(a.substr(0,complete.length) == complete) {
          matches.push(a);
          ////dump("match: " + a + "\n");
          // if no best match, this is the best match
          if(bestmatch == null)
          {
            bestmatch = a;
          }
          else {
            // the best match is the longest common string
            function min(a,b){ return ((a<b)?a:b); }
            var i;
            for(i=0; i< min(bestmatch.length, a.length); i++)
            {
              if(bestmatch.charAt(i) != a.charAt(i))
                break;
            }
            bestmatch = bestmatch.substr(0,i);
            ////dump("bestmatch len: " + i + "\n");
          }
          ////dump("bestmatch: " + bestmatch + "\n");
        }
      }
      bestmatch = (bestmatch || "");
      ////dump("matches: " + matches + "\n");
      var objAndComplete = (objname || obj) + "." + bestmatch;
      //dump("matches.length: " + matches.length + ", tooManyMatches: " + tooManyMatches + ", objAndComplete: " + objAndComplete + "\n");
      if(matches.length > 1 && (tooManyMatches == objAndComplete || matches.length <= 10)) {
        printWithRunin("Matches: ", matches.each(function(){return this.link(this);}).join(', '), "tabcomplete");
        tooManyMatches = null;
      }
      else if(matches.length > 10)
      {
        println(matches.length + " matches.  Press tab again to see them all", "tabcomplete");
        tooManyMatches = objAndComplete;
      }
      else {
        tooManyMatches = null;
      }
      if(bestmatch != "")
      {
        var sstart;
        if(dotpos == caret) {
          sstart = spacepos+1;
        }
        else {
          sstart = dotpos+1;
        }
        _in.value = _in.value.substr(0, sstart)
                  + bestmatch
                  + _in.value.substr(caret);
        setselectionto(_in,caret + (bestmatch.length - complete.length));
      }
    }
}
