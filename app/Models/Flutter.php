<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flutter extends Model
{
  protected $table = 'flutters';
  protected $fillable = [
    'user_id',
    'text_area'
  ];
  public $timestamps = false;
}
