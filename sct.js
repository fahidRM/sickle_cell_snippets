/**
*	Sickle cell genotype checking tool
*	Designed by Fahid RM
*	email: fahid.rabiu@gmail.com
*	License: MIT license (in summary, free)
**/

//A list of genoypes
const genotypes = ["AA", "AC", "AS", "CC", "SC", "SS"];


/**
*	getKidsGenotype				Obtains the possible genotype of offsprings of the specified parents
*	@param parent_a: (string)	Genotype of the first parent
*	@param parent_b: (string)	Genotype of the second parent
*	@return  (string array)		Possible genotypes of the offspring
*
*	@note:
*		Upon error, if any of the parent genotype is invalid, a string array with an 
*		error message would be returned.	
**/
function getKidsGenotype(parent_a, parent_b){

	// confirms that the genotype length is valid
	if (parent_a.length != 2 || parent_b.length != 2){ reutrn ["Invalid parent genotype"]; }

	//returns the result of matching the parents
	return makeProper([ parent_a[0] +  parent_b[0],  parent_a[0] +  parent_b[1], parent_a[1] +  parent_b[0], parent_a[1] +  parent_b[1] ]);
}


/***
*	makeProper				Rearranges the alphabets obtained from the genotype matching process
*
*	@param genotype_list: (string array) The list of genotype to be adjusted
*	@return (sting array)				 List of genotype with letters rearranged to the proper method 
*
*	@note: Needs to be reviewed
**/
function makeProper(genotype_list){
	for(var i = 0; i < genotype_list.length; i++){
		if (genotype_list[i] == "SA"){ genotype_list[i] = "AS";}
		else if (genotype_list[i] == "CA"){ genotype_list[i] = "AC";}
		else if (genotype_list[i] == "CS"){ genotype_list[i] = "SC";}
	}
	return genotype_list;
}


/**
*	getSummary			Persents the result obtained in a readable format
*	@param genotype_array (string array): 	List of genotype
*	@return (string)						A readable summary of the presented genotype list
**/
function getSummary(genotype_array){

	

	//counts the occurrence of each genotype 
	this.count = [0, 0, 0, 0, 0, 0];
	for (var i = 0;  i < genotype_array.length; i++){
		for (var j = 0; j < genotypes.length; j++){
			if (genotype_array[i] == genotypes[j]){
				this.count[j] += 1;
			}
		}
	}

	//creates the summary string

	this.summary = "Every child has a ";
	for (var i = 0; i < count.length; i++){
		if (count[i] > 0){
			summary += (( count[i] / genotype_array.length ) * 100) +  "% chance of being " +  genotypes[i] + ", ";
		}
	}

	return this.summary.replace(/,\s*$/, "");
}


/**
*	getAdvice	Gives advice based on the outcome of the genotype matching process
*	@param genotype_array: (string array)	The list of genotypes
*	@return (string) Advice based on the contents of the genotype array
**/
function getAdvice(genotype_array){

	// counts the occurrence of each genotype
	this.count = [0, 0, 0, 0, 0, 0];
	for (var i = 0;  i < genotype_array.length; i++){
		for (var j = 0; j < genotypes.length; j++){
			if (genotype_array[i] == genotypes[j]){
				this.count[j] += 1;
			}
		}
	}
	alert(count[4] +  "...." +  count[5]);
	//gives advice based on the count of SS and SC discovered
	if (count[4] == 0 && count[5] == 0){ return "This is advisable"; }
	else if (  count[4] == 1 || count[5] == 1){ return "This is not really advisable";}
	else{ return "This is not advisable"; }
}