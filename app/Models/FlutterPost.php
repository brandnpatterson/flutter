<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FlutterPost extends Model
{
  protected $table = 'flutter_posts';
  protected $fillable = [
    'user_id',
    'flutter_post'
  ];
  public $timestamps = false;
}
