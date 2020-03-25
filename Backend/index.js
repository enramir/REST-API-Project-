const express = require("express");
const bodyParser = require("body-parser"); 

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 80;

const BASE_API_URL = "/api/v1";

var emp_stats = [];

app.get(BASE_API_URL+"/emp_stats/loadInitialData", (req,res) =>{
	
	var stat1 = new Object({ country: "Spain", 
	                         year: 2013, 
	                         emp_female_age15_24: 16.079, 
	                         emp_male_age15_24: 17.332, 	
	                         emp_vuln_female: 9.692, 
	                         emp_vuln_male: 15.328
	                       });
	
	var stat2 = new Object({ country: "Spain", 
	                         year: 2014, 
	                         emp_female_age15_24: 15.92, 
	                         emp_male_age15_24: 17.397, 	
	                         emp_vuln_female: 9.482, 
	                         emp_vuln_male: 15.062
	                       });
	
	var stat3 = new Object({ country: "Spain", 
	                         year: 2015, 
	                         emp_female_age15_24: 17.289, 
	                         emp_male_age15_24: 18.577, 	
	                         emp_vuln_female: 9.51, 
	                         emp_vuln_male: 14.616
	                       });
    
	var stat4 = new Object({ country: "Italy", 
	                         year: 2013, 
	                         emp_female_age15_24: 13.441, 
	                         emp_male_age15_24: 18.714, 
	                         emp_vuln_female: 14.141, 
	                         emp_vuln_male: 20.573
	                       });
	
	var stat5 = new Object({ country: "Italy", 
	                         year: 2014, 
	                         emp_female_age15_24: 12.547, 
	                         emp_male_age15_24: 18.196, 
	                         emp_vuln_female: 14.691, 
	                         emp_vuln_male: 20.492
	                       });
	
	var stat6 = new Object({ country: "Italy", 
	                         year: 2015, 
	                         emp_female_age15_24: 12.276, 
	                         emp_male_age15_24: 18.638, 
	                         emp_vuln_female: 14.221, 
	                         emp_vuln_male: 20.267
	                       });
	
	var stat7 = new Object({ country: "Czechia", 
	                         year: 2013, 
	                         emp_female_age15_24: 20.835, 
	                         emp_male_age15_24: 29.927, 
                             emp_vuln_female: 11.624, 
                             emp_vuln_male: 16.705
	                       });
	
	var stat8 = new Object({ country: "Czechia", 
	                         year: 2014, 
	                         emp_female_age15_24: 21.561, 
	                         emp_male_age15_24: 32.336, 
                             emp_vuln_female: 11.191, 
                             emp_vuln_male: 17.095
	                       });
	
	var stat9 = new Object({ country: "Czechia", 
	                         year: 2015, 
	                         emp_female_age15_24: 23.59, 
	                         emp_male_age15_24: 33.133, 
                             emp_vuln_female: 10.918, 
                             emp_vuln_male: 16.066
	                       });
	
	var stat10 = new Object({ country: "Finland", 
	                         year: 2013, 
	                         emp_female_age15_24: 44.203, 
                        	 emp_male_age15_24: 39.12, 	
                             emp_vuln_female: 6.966, 
                         	 emp_vuln_male: 11.736
	                       });
	
	var stat11 = new Object({ country: "Finland", 
	                         year: 2014, 
	                         emp_female_age15_24: 23.438, 
                        	 emp_male_age15_24: 39.773, 	
                             emp_vuln_female: 7.368, 
                         	 emp_vuln_male: 12.043
	                       });
	
	var stat12 = new Object({ country: "Finland", 
	                         year: 2015, 
	                         emp_female_age15_24: 43.136, 
                        	 emp_male_age15_24: 38.142, 	
                             emp_vuln_female: 7.311, 
                         	 emp_vuln_male: 12.512
	                       });
	
	var stat13 = new Object({ country: "Portugal", 
	                         year: 2013, 
	                         emp_female_age15_24: 20.172, 
                        	 emp_male_age15_24: 22.909, 	
                             emp_vuln_female: 14.151, 
                         	 emp_vuln_male: 19.106
	                       });
	
	var stat14 = new Object({ country: "Portugal", 
	                         year: 2014, 
	                         emp_female_age15_24: 21.682, 
                        	 emp_male_age15_24: 22.873, 	
                             emp_vuln_female: 11.754, 
                         	 emp_vuln_male: 17.166
	                       });
	
	var stat15 = new Object({ country: "Portugal", 
	                         year: 2015, 
	                         emp_female_age15_24: 21.592, 
                        	 emp_male_age15_24: 24.092, 	
                             emp_vuln_female: 11.068, 
                         	 emp_vuln_male: 16.037
	                       });
	
	var stat16 = new Object({ country: "Lithuania", 
	                         year: 2013, 
	                         emp_female_age15_24: 21.347, 
                        	 emp_male_age15_24: 27.553, 	
                             emp_vuln_female: 8.442, 
                         	 emp_vuln_male: 10.741
	                       });
	
	var stat17 = new Object({ country: "Lithuania", 
	                         year: 2014, 
	                         emp_female_age15_24: 23.863, 
                        	 emp_male_age15_24: 31.013, 	
                             emp_vuln_female: 8.934, 
                         	 emp_vuln_male: 10.733
	                       });
	
	var stat18 = new Object({ country: "Lithuania", 
	                         year: 2015, 
	                         emp_female_age15_24: 25.676, 
                        	 emp_male_age15_24: 30.841, 	
                             emp_vuln_female: 8.695, 
                         	 emp_vuln_male: 11.325
	                       });
	
	var stat19 = new Object({ country: "Croatia", 
	                         year: 2013, 
	                         emp_female_age15_24: 12.438, 
                        	 emp_male_age15_24: 17.375, 	
                             emp_vuln_female: 13.013, 
                         	 emp_vuln_male: 14.273
	                       });
	
	var stat20 = new Object({ country: "Croatia", 
	                         year: 2014, 
	                         emp_female_age15_24: 13.305, 
                        	 emp_male_age15_24: 21.213, 	
                             emp_vuln_female: 9.252, 
                         	 emp_vuln_male: 11.36
	                       });
	
	var stat21 = new Object({ country: "Croatia", 
	                         year: 2015, 
	                         emp_female_age15_24: 15.64, 
                        	 emp_male_age15_24: 22.376, 	
                             emp_vuln_female: 9.092, 
                         	 emp_vuln_male: 11.65
	                       });
	
	var stat22 = new Object({ country: "Malta", 
	                         year: 2013, 
	                         emp_female_age15_24: 43.986, 
                        	 emp_male_age15_24: 48.23, 	
                             emp_vuln_female: 4.796, 
                         	 emp_vuln_male: 12.186
	                       });
	
	var stat23 = new Object({ country: "Malta", 
	                         year: 2014, 
	                         emp_female_age15_24: 46.572, 
                        	 emp_male_age15_24: 46.136, 	
                             emp_vuln_female: 5.292, 
                         	 emp_vuln_male: 11.995
	                       });
	
	var stat24 = new Object({ country: "Malta", 
	                         year: 2015, 
	                         emp_female_age15_24: 45.336, 
                        	 emp_male_age15_24: 46.61, 	
                             emp_vuln_female: 5.151, 
                         	 emp_vuln_male: 12.199
	                       });
	
	emp_stats.push(stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, 
	               stat11, stat12, stat13, stat14, stat15, stat16, stat17, stat18, stat19, 
	               stat20, stat21, stat22, stat23, stat24);
	
	res.sendStatus(201,"LOADED RESOURCES!");
	
});

//GET EMP_STATS (OBTENGO TODOS LOS RECURSOS)

app.get(BASE_API_URL+"/emp_stats", (req,res) =>{
	
	res.send(JSON.stringify(emp_stats,null,2));
});


//GET EMP_STATS/COUNTRY/YEAR (OBTENGO UN RECURSO ESPECÍFICO)

app.get(BASE_API_URL+"/emp_stats/:country/:year", (req,res) =>{
	
	var country = req.params.country;
	var year = req.params.year;
	
	var filteredEmp = emp_stats.filter((e) =>{
		return (e.country == country && e.year == year);
	});
	
	
	if(filteredEmp.length == 1){
		res.send(filteredEmp[0]);
		
	}else{
		res.sendStatus(404, "COUNTRY OR YEAR NOT FOUND");
	}
});

//GET EMP_STATS/XXX (OBTENGO UN RECURSO ESPECÍFICO (PAÍSES O AÑOS) SEGÚN EL PARÁMETRO DE LA RUTA)

app.get(BASE_API_URL+"/emp_stats/:resource", (req,res) =>{
	
	var resource = req.params.resource; 
	
	var filteredResource = emp_stats.filter((e) => {
		//return (e.country == resource) || (e.year == resource);
		if(e.country == resource){
			return e;
		
		}else if(e.year == resource){
			return e;
		}
	
	});
	
	if(filteredResource.length >= 1) {
		res.send(filteredResource);	
	
	}else{
		res.sendStatus(404, "RESOURCE NOT FOUND");
	}
	
});
	
//POST EMP_STATS (CREO UN NUEVO RECURSO)

app.post(BASE_API_URL+"/emp_stats", (req,res) => {
	
	var newEmp = req.body;
	var cont_repeated = false;
	
	emp_stats.forEach((r) =>{
		if(newEmp.country == r.country && newEmp.year == r.year){
			cont_repeated = true;
		}
	})

	if(cont_repeated){
		res.sendStatus(409,"The resource already exists!!");
	
	}else{
		
		if(newEmp == "" || (newEmp.country == null) || (newEmp.year == null)){
			res.sendStatus(400,"BAD REQUEST");
		
		}else{
			emp_stats.push(newEmp); 
			res.sendStatus(201,"CREATED");
		}
	}
	
});

//PUT EMP_STATS/XXX (ACTUALIZA UN RECURSO CONCRETO)

app.put(BASE_API_URL+"/emp_stats/:country/:year", (req,res) =>{
	
	var country = req.params.country;
	var year = req.params.year;
	var updateEmp = req.body;
	var validator_bool = false;
	
	var updateEmployments = emp_stats.map((e) =>{
		if(e.country == country && e.year == year){
			validator_bool = true;
			return updateEmp;
		}else{
			return e;
		}
	});
	
	if(validator_bool == true){
		emp_stats = updateEmployments;
		res.sendStatus(200,"Updated resource");
	}else{
		res.sendStatus(404,"Resource does not exist");
	}
});

//DELETE EMP_STATS (BORRAR TODOS LOS RECURSOS)

app.delete(BASE_API_URL+"/emp_stats", (req,res) =>{
	
	emp_stats = [];
	res.sendStatus(200);
});

//DELETE EMP_STATS/XXX (BORRA UN RECURSO CONCRETO)

app.delete(BASE_API_URL+"/emp_stats/:country/:year", (req,res) =>{
	
	var country = req.params.country;
	var year = req.params.year;
	
	var filteredEmp = emp_stats.map((e) =>{
		if(e.country != country){
			return e;
		}else{
			if(e.year != year){
				return e;
			}
		}
	});
	
	var filteredUndefined = filteredEmp.filter((f) =>{
		return (f != undefined);
	})
	
	if(filteredUndefined.length < emp_stats.length){
		emp_stats = filteredUndefined;
		res.sendStatus(200);
		
	}else{
		res.sendStatus(404, "RESOURCE NOT FOUND");
	}
});

//PUT A TODOS LOS RECURSOS (¡¡¡INCORRECTO!!!)

app.put(BASE_API_URL+"/emp_stats", (req,res) =>{
	
	res.sendStatus(405,"METHOD NOT ALLOWED");
});

//POST A UN RECURSO CONCRETO (¡¡¡INCORRECTO!!!)

app.post(BASE_API_URL+"/emp_stats/:resource", (req,res) =>{
	
	res.sendStatus(405,"METHOD NOT ALLOWED");
});


app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");