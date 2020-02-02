import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { amber } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';

import { Delete, Edit } from '@material-ui/icons';
import { deleteBookStart } from '../../containers/Books/booksActions';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: amber[500]
  }
}));

function BookItem(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleDeleteBook = id => dispatch(deleteBookStart(id));

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {props.title[0].toUpperCase()}
          </Avatar>
        }
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={props.file}
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Edit />
        </IconButton>
        <IconButton
          aria-label='Delete'
          onClick={() => handleDeleteBook(props._id)}
        >
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default React.memo(BookItem);
