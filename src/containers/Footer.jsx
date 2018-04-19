import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

import FilterLink from './FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <Toolbar>
      <ToolbarGroup>
          <ToolbarTitle text='Show:'/>
      </ToolbarGroup>
      <ToolbarGroup>
          <FilterLink filter={VisibilityFilters.SHOW_ALL} label='All'/>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} label='Active'/>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} label='Completed'/>
      </ToolbarGroup>
  </Toolbar>
);
 
export default Footer;
