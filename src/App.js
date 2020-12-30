import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#ffff', height: '100vh' }} />
        
    <div style={{ width: 300 , marginTop:"-530px", marginLeft:"450px"}} >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top6Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
           {...params} 
           label="Type"
            margin="normal"
            variant="outlined"
             
             />
        )}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top6Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search "
            margin="normal"
            variant="outlined"
           
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
      </Container>
      
    </React.Fragment>
  );
}
const top6Films = [
  { title: 'Spanish', iso639_1: "es", iso639_2: "spa"},
  { title: "Guaraní", iso639_1: "es", iso639_2: "spa" },
  { title: 'English', iso639_1: "es", iso639_2: "eng" },
  { title: 'Spanish', iso639_1: "es", iso639_2: "spa"},
  { title: 'Spanish', iso639_1: "es", iso639_2: "spa"},
  { title: 'Aymara,', iso639_1: "ay", iso639_2: "aym"},
  { title: 'Quechua',iso639_1: "qu", iso639_2: "que" },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa" },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa" },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'English', iso639_1: "es", iso639_2: "eng" },
  { title: 'Chamorro',iso639_1: "ch", iso639_2: "cha" },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'Spanish',iso639_1: "es", iso639_2: "spa"  },
  { title: 'English', iso639_1: "es", iso639_2: "eng" },
];


