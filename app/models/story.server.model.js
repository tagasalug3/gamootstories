'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Story Schema
 */
var StorySchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill story title',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    narrative: {
		type: String,
		default: 'Type in your story here.',
        trim: true
	}
});

mongoose.model('Story', StorySchema);