import React from 'react';
import Avatar from '@mui/material/Avatar';

const Sessions= () => {
return (
	<div>
  <ul>
  <li><a class="active" href="/profile">profile</a></li>
  <li><a href="/sessions">Sessions</a></li>
  <li><a href="/materials">Materials</a></li>
  <li><a href="/blogs">Blogs</a></li>
  <li><a href="/certification">Certification</a></li>
  <li><a href="/logout">Logout</a></li>
  <div className="doubt">
  <li>
  <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 47, height: 47 }}
      />
  </li>
  </div>
</ul>
	<h1>Sessions</h1>
	</div>
);
};

export default Sessions;
