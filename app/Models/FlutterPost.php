<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FlutterPost extends Model
{
  protected $table = 'flutters';
  protected $fillable = [
    'user_id',
    'text_field'
  ];
  public $timestamps = false;
}
