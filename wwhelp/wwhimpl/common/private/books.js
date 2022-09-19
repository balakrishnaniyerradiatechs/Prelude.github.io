// Copyright (c) 2001-2003 Quadralay Corporation.  All rights reserved.
//

function  WWHBookGroups_Books(ParamTop)
{
  var  BookGrouping1;


  ParamTop.fAddDirectory("intro", null, null, null, null);
  ParamTop.fAddDirectory("reference", null, null, null, null);
  ParamTop.fAddDirectory("flowcharts", null, null, null, null);
  ParamTop.fAddDirectory("ois", null, null, null, null);
  ParamTop.fAddDirectory("pcs", null, null, null, null);
  ParamTop.fAddDirectory("ics", null, null, null, null);
  ParamTop.fAddDirectory("ars", null, null, null, null);
  ParamTop.fAddDirectory("aps", null, null, null, null);
  ParamTop.fAddDirectory("gls", null, null, null, null);
  ParamTop.fAddDirectory("sys", null, null, null, null);
  ParamTop.fAddDirectory("frcst", null, null, null, null);
  ParamTop.fAddDirectory("mkt", null, null, null, null);
  ParamTop.fAddDirectory("shop", null, null, null, null);
  ParamTop.fAddDirectory("bmw", null, null, null, null);
  ParamTop.fAddDirectory("rnt", null, null, null, null);
  ParamTop.fAddDirectory("srv", null, null, null, null);
  ParamTop.fAddDirectory("whs", null, null, null, null);
  ParamTop.fAddDirectory("sas", null, null, null, null);
  BookGrouping1 = ParamTop.fAddGrouping("E-Commerce", null, null, null);
    BookGrouping1.fAddDirectory("via", null, null, null, null);
    BookGrouping1.fAddDirectory("edi", null, null, null, null);
    BookGrouping1.fAddDirectory("tpcx", null, null, null, null);
  ParamTop.fAddDirectory("opt_fin", null, null, null, null);
  ParamTop.fAddDirectory("tech", null, null, null, null);
  ParamTop.fAddDirectory("new_features", null, null, null, null);
}

function  WWHBookGroups_ShowBooks()
{
  return true;
}

function  WWHBookGroups_ExpandAllAtTop()
{
  return false;
}
